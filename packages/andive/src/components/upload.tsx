import React, {RefObject, InputHTMLAttributes, ChangeEvent, DragEvent} from 'react'
import styled from 'styled-components'

import * as palette from '../constants/palette'
import {Body2, Body3} from './typography'
import Box from './box'
import {VSpace} from './v-space'
import Loader from './loader'

const UploadRow = styled.div<{$showError?: boolean; $isHighlighted?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  border: 1px dashed ${({$isHighlighted}) => ($isHighlighted ? palette.mediumBeetrootPurple : palette.lightPrimary)};
  ${({$showError}) => ($showError ? `border: 1px dashed ${palette.lightRadishRed}` : ``)};
  box-sizing: border-box;
  border-radius: 4px;
`

const UploadCol = styled.div`
  display: flex;
  justify-content: center;
`

const HiddenInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const InputLabel = styled.label`
  :hover {
    cursor: pointer;
  }
`

const PaddingBox = styled(Box)`
  width: auto;
`

const FlexBox = styled(Box)`
  display: flex;
`

const Error = styled(Body3)`
  padding: 8px 16px;
  color: ${palette.darkRadishRed};
  background-color: ${palette.lightRadishRed};
  border-radius: 4px;
`

const useDragSupported = (isMobile?: boolean) => {
  if (isMobile) {
    return false
  }
  const div = document.createElement('div')
  return (
    ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
  )
}

const preventDefaults = e => {
  e.preventDefault()
  e.stopPropagation()
}

const useDragHandler = (
  ref: RefObject<HTMLElement>,
  onDrag?: (event: DragEvent<HTMLInputElement>) => Promise<void>,
  isMobile?: boolean
) => {
  const [isDragging, setIsDragging] = React.useState(false)
  const isDragSupported = useDragSupported(isMobile)

  React.useEffect(() => {
    const dragInHandler = event => {
      preventDefaults(event)
      setIsDragging(true)
    }

    const dragOutHandler = event => {
      preventDefaults(event)
      setIsDragging(false)
    }

    const dropHandler = async event => {
      dragOutHandler(event)
      if (onDrag) {
        await onDrag(event)
      }
    }

    if (isDragSupported && ref.current) {
      ref.current.addEventListener('dragenter', dragInHandler)
      ref.current.addEventListener('dragover', dragInHandler)
      ref.current.addEventListener('dragleave', dragOutHandler)
      ref.current.addEventListener('drop', dropHandler)
    }

    const current = ref.current
    return () => {
      if (isDragSupported && current) {
        current.removeEventListener('dragenter', dragInHandler)
        current.removeEventListener('dragover', dragInHandler)
        current.removeEventListener('dragleave', dragOutHandler)
        current.removeEventListener('drop', dropHandler)
      }
    }
  }, [isDragSupported, ref, onDrag, isMobile])

  return isDragging
}

interface UploadProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
  onDrag?: (event: DragEvent<HTMLInputElement>) => Promise<void>
  error?: React.ReactNode
  loading?: boolean
  mobile?: boolean
}

export const Upload = ({onChange, onDrag, error, loading, mobile, ...props}: UploadProps) => {
  const uploadRootRef = React.useRef(null)
  const isDragSupported = useDragSupported(mobile)
  const isDragging = useDragHandler(uploadRootRef, onDrag, mobile)

  const showError = !loading && Boolean(error)
  const showDrag = isDragSupported && Boolean(onDrag)

  return (
    <>
      <div ref={uploadRootRef}>
        <UploadRow $showError={showError} $isHighlighted={isDragging}>
          <UploadCol>
            {!loading ? (
              <>
                {showDrag && (
                  <>
                    <PaddingBox>
                      <Body2>Faites glisser votre facture</Body2>
                    </PaddingBox>
                    <PaddingBox>
                      <Body2 color={palette.mediumPrimary}>OU</Body2>
                    </PaddingBox>
                  </>
                )}
                <HiddenInput id="file" name="file" type="file" onChange={onChange} {...props} />
                <PaddingBox>
                  <InputLabel htmlFor="file">
                    <Body2 color={palette.mediumBerryBlue}>Parcourir mes fichiers</Body2>
                  </InputLabel>
                </PaddingBox>
              </>
            ) : (
              <Loader inline />
            )}
          </UploadCol>
        </UploadRow>
      </div>
      {showError ? (
        <>
          <VSpace $px={8} />
          <FlexBox>
            <Error>{error}</Error>
          </FlexBox>
        </>
      ) : null}
    </>
  )
}
