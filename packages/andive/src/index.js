/**
 * Icons
 */

export AddressIcon from './components/icons/address'

export AddressRemoveIcon from './components/icons/address-remove'

export AlertIcon from './components/icons/alert'

export AmbulanceIcon from './components/icons/ambulance'

export ArrowDownIcon from './components/icons/arrow-down'

export ArrowRightIcon from './components/icons/arrow-right'

export ArrowLeftIcon from './components/icons/arrow-left'

export ArrowUpIcon from './components/icons/arrow-up'

export BackIcon from './components/icons/back'

export BariatricIcon from './components/icons/bariatric'

export CancelIcon from './components/icons/cancel'

export CloseIcon from './components/icons/close'

export EditIcon from './components/icons/edit'

export FlagIcon from './components/icons/flag'

export HistoryIcon from './components/icons/history'

export LogoutIcon from './components/icons/logout'

export LyingIcon from './components/icons/lying'

export MedicalFacilityIcon from './components/icons/medical-facility'

export NewIcon from './components/icons/new'

export SeatedIcon from './components/icons/seated'

export TpmrIcon from './components/icons/tpmr'

export CheckboxOnIcon from './components/icons/checkbox-on'

export CheckboxOffIcon from './components/icons/checkbox-off'

export RadioOnIcon from './components/icons/radio-on'

export RadioOffIcon from './components/icons/radio-off'

export VslIcon from './components/icons/vsl'

export QuestionIcon from './components/icons/question'

export Art80Icon from './components/icons/art80'

export PatientIcon from './components/icons/patient'

export CerfaIcon from './components/icons/cerfa'

export DelegateIcon from './components/icons/delegate'

export MapIcon from './components/icons/map'

export ExportIcon from './components/icons/export'

export CheckIcon from './components/icons/check'

export WarningIcon from './components/icons/warning'

export ForbiddenIcon from './components/icons/forbidden'

export IncidentIcon from './components/icons/incident'

export MfIcon from './components/icons/mf'

export MfuIcon from './components/icons/mfu'

export MtIcon from './components/icons/mt'

export RidesIcon from './components/icons/rides'

export OrdersIcon from './components/icons/orders'

export DashboardIcon from './components/icons/dashboard'

export BurgerIcon from './components/icons/burger'

export PatientAddIcon from './components/icons/patient-add'

export PatientRemoveIcon from './components/icons/patient-remove'

export PassengerIcon from './components/icons/passenger'

export EuroIcon from './components/icons/euro'

export FlatrateSt1Icon from './components/icons/flatrate-st1'

export FlatrateSt2Icon from './components/icons/flatrate-st2'

export FlatrateSt3Icon from './components/icons/flatrate-st3'

export FlatrateTdIcon from './components/icons/flatrate-td'

export FlatrateTsIcon from './components/icons/flatrate-ts'
/**
 * Illustrations
 */

export DirectionIllustration from './components/illustrations/direction'

export DoctorIllustration from './components/illustrations/doctor'

export ErrorIllustration from './components/illustrations/error'

export HospitalIllustration from './components/illustrations/hospital'

export OrderOnlineIllustration from './components/illustrations/order-online'

export PatientIllustration from './components/illustrations/patient'

export StandardIllustration from './components/illustrations/standard'

export SuccessIllustration from './components/illustrations/success'

/**
 * Components
 */

export Info from './components/info'

export {default as Accordeon} from './components/accordeon'

export AppBar from './components/app-bar'

export Autocomplete from './components/autocomplete'

export Baseline from './components/baseline'

export Button from './components/button'

export ButtonGroup from './components/button-group'

export Card from './components/card'

export Checkbox from './components/checkbox'

export CheckboxGroup from './components/checkbox-group'

export DialogTitle from './components/dialog-title'

export Dialog from './components/dialog'

export Direction from './components/direction'

export Dropdown from './components/dropdown'

export DropdownMenu from './components/dropdown-menu'

export DropdownFilter from './components/dropdown-filter'

export Hover from './components/hover'

export Icon from './components/icon'

export Input from './components/input'

export RideStatusBar from './components/ride-status-bar'

export RideStatus from './components/ride-status'

export Select from './components/select'

export Menu from './components/menu'

export ThemeProvider, {defaultTheme} from './components/theme-provider'

export Title from './components/title'

export VSpace from './components/v-space'

export HSpace from './components/h-space'

export Modal from './components/modal'

export Loader from './components/loader'
import * as TypographyComponents from './components/typography'
export const Typography = TypographyComponents
export {ZIndexes} from './constants/enum'

export NativeCheckbox from './components/native/checkbox'

/**
 * Constants
 */

import * as paletteObject from './constants/palette'
export const palette = paletteObject

import ToastContainer, * as toastActions from './components/toast'
export const Toast = ToastContainer
export const toast = toastActions.toast
export const toastSuccess = toastActions.toastSuccess
export const toastWarning = toastActions.toastWarning
export const toastError = toastActions.toastError
export const toastInfo = toastActions.toastInfo
