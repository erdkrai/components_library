type buttonState = Normal | Loading | Disabled
type buttonVariant = Fit | Long | Full | Rounded
type buttonType = Primary | Secondary | Delete | Success
type btnBgVariant = Solid | Subtle | NoFill
type buttonSize = Large | Medium | Small
type badgeColor = BadgeBlue | NoBadge
type badge = {value: string, color: badgeColor}
let getBGColor: (
  ~buttonType: buttonType,
  ~buttonState: buttonState,
  ~btnBgVariant: btnBgVariant,
  unit,
) => string
let useGetBgColor: (
  ~buttonType: buttonType,
  ~buttonState: buttonState,
  ~btnBgVariant: btnBgVariant,
  unit,
) => string
let getTextColor: (
  ~buttonType: buttonType,
  ~buttonState: buttonState,
  ~btnBgVariant: btnBgVariant,
  unit,
) => string
let useGetTextColor: (
  ~buttonType: buttonType,
  ~buttonState: buttonState,
  ~btnBgVariant: btnBgVariant,
  unit,
) => string
@react.component
let make: (
  ~loadingText: string=?,
  ~buttonState: buttonState=?,
  ~text: string=?,
  ~isSelectBoxButton: bool=?,
  ~buttonType: buttonType=?,
  ~btnBgVariant: btnBgVariant=?,
  ~isDropdownOpen: bool=?,
  ~buttonVariant: buttonVariant=?,
  ~buttonSize: buttonSize=?,
  ~leftIcon: React.element=?,
  ~rightIcon: React.element=?,
  ~type_: string=?,
  ~flattenBottom: bool=?,
  ~flattenTop: bool=?,
  ~onEnterPress: bool=?,
  ~onClick: JsxEvent.Mouse.t => unit=?,
  ~allowButtonTextMinWidth: bool=?,
  ~badge: badge=?,
  ~ellipsisOnly: bool=?,
  ~isPhoneDropdown: bool=?,
) => Jsx.element
