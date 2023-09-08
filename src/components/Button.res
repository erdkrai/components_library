type buttonState = Normal | Loading | Disabled
type buttonVariant = Fit | Long | Full | Rounded
type buttonType =
  | Primary
  | Secondary
  | Delete
  | Success
type btnBgVariant = Solid | Subtle | NoFill
type buttonSize = Large | Medium | Small
type badgeColor =
  | BadgeBlue
  | NoBadge
type badge = {
  value: string,
  color: badgeColor,
}

let defaultBadge = [("value", "1"), ("color", "NoBadge")]->Js.Dict.fromArray

let getBGColor = (~buttonType, ~buttonState, ~btnBgVariant: btnBgVariant, ()) =>
  switch buttonType {
  | Primary =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Normal => "bg-jp-2-light-primary-600 hover:bg-jp-2-light-primary-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-primary-focus"
      | Loading => "bg-jp-2-light-primary-600"
      | Disabled => "bg-jp-2-light-primary-300 shadow-jp-2-xs"
      }
    | Subtle =>
      switch buttonState {
      | Normal => "bg-jp-2-light-primary-200 hover:bg-jp-2-light-primary-300 focus:outline-none focus:shadow-jp-2-sm-primary-focus"
      | Loading => "bg-jp-2-light-primary-200"
      | Disabled => "bg-jp-2-light-primary-100"
      }
    | NoFill =>
      switch buttonState {
      | Normal => "hover:bg-jp-2-light-primary-200 focus:outline-none focus:shadow-jp-2-sm-primary-focus"
      | Loading => "bg-jp-2-light-primary-200"
      | Disabled => ""
      }
    }
  | Secondary =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Normal => "bg-white hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-gray-focus border border-jp-2-light-gray-600"
      | Loading => "bg-white border border-jp-2-light-gray-600 shadow-jp-2-xs"
      | Disabled => "bg-jp-2-light-gray-300 shadow-jp-2-xs border border-jp-2-light-gray-400"
      }
    | Subtle =>
      switch buttonState {
      | Normal => "bg-jp-2-light-gray-200 hover:bg-jp-2-light-gray-300 focus:outline-none focus:shadow-jp-2-sm-gray-focus"
      | Loading => "bg-jp-2-light-gray-200"
      | Disabled => "bg-jp-2-light-gray-300 shadow-jp-2-xs"
      }
    | NoFill =>
      switch buttonState {
      | Normal => "hover:bg-jp-2-light-gray-200 focus:outline-none focus:shadow-jp-2-sm-gray-focus"
      | Loading => "bg-jp-2-light-gray-200"
      | Disabled => ""
      }
    }

  | Delete =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Normal => "bg-jp-2-light-red-600 hover:bg-jp-2-light-red-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-error-focus"
      | Loading => "bg-jp-2-light-red-600"
      | Disabled => "bg-jp-2-light-red-300 shadow-jp-2-xs"
      }
    | Subtle =>
      switch buttonState {
      | Normal => "bg-jp-2-light-red-200 hover:bg-jp-2-light-red-300 focus:outline-none focus:shadow-jp-2-sm-error-focus"
      | Loading => "bg-jp-2-light-red-200"
      | Disabled => "bg-jp-2-light-red-100"
      }
    | NoFill =>
      switch buttonState {
      | Normal => "hover:bg-jp-2-light-red-200 focus:outline-none focus:shadow-jp-2-sm-error-focus"
      | Loading => "bg-jp-2-light-red-200"
      | Disabled => ""
      }
    }
  | Success =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Normal => "bg-jp-2-light-green-600 hover:bg-jp-2-light-green-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-error-focus"
      | Loading => "bg-jp-2-light-green-600"
      | Disabled => "bg-jp-2-light-green-300 shadow-jp-2-xs"
      }
    | Subtle =>
      switch buttonState {
      | Normal => "bg-jp-2-light-green-200 hover:bg-jp-2-light-green-300 focus:outline-none focus:shadow-jp-2-sm-error-focus"
      | Loading => "bg-jp-2-light-green-200"
      | Disabled => "bg-jp-2-light-green-100"
      }
    | NoFill =>
      switch buttonState {
      | Normal => "hover:bg-jp-2-light-green-200 focus:outline-none focus:shadow-jp-2-sm-error-focus"
      | Loading => "bg-jp-2-light-green-200"
      | Disabled => ""
      }
    }
  }

let useGetBgColor = (~buttonType, ~buttonState, ~btnBgVariant, ()) => {
  getBGColor(~buttonType, ~buttonState, ~btnBgVariant, ())
}

let getTextColor = (~buttonType, ~buttonState, ~btnBgVariant: btnBgVariant, ()) =>
  switch buttonType {
  | Primary =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Disabled => "text-white fill-white"
      | Normal => "text-white fill-white"
      | Loading => "text-white fill-white"
      }
    | Subtle =>
      switch buttonState {
      | Disabled => "text-jp-2-light-primary-300 fill-jp-2-light-primary-300"
      | Normal => "text-jp-2-light-primary-600 fill-jp-2-light-primary-600"
      | Loading => "text-jp-2-light-primary-600 fill-jp-2-light-primary-600"
      }
    | NoFill =>
      switch buttonState {
      | Disabled => "text-jp-2-light-primary-300 fill-jp-2-light-primary-300"
      | Normal => "text-jp-2-light-primary-600 fill-jp-2-light-primary-600"
      | Loading => "text-jp-2-light-primary-600 fill-jp-2-light-primary-600"
      }
    }

  | Delete =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Disabled => "text-white fill-white"
      | Normal => "text-white fill-white"
      | Loading => "text-white fill-white"
      }
    | Subtle =>
      switch buttonState {
      | Disabled => "text-jp-2-light-red-300 fill-jp-2-light-red-300"
      | Normal => "text-jp-2-light-red-600 fill-jp-2-light-red-600"
      | Loading => "text-jp-2-light-red-600 fill-jp-2-light-red-600"
      }
    | NoFill =>
      switch buttonState {
      | Disabled => "text-jp-2-light-red-300 fill-jp-2-light-red-300"
      | Normal => "text-jp-2-light-red-600 fill-jp-2-light-red-600"
      | Loading => "text-jp-2-light-red-600 fill-jp-2-light-red-600"
      }
    }

  | Secondary =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Disabled => "text-jp-2-light-gray-600 fill-jp-2-light-gray-600"
      | Loading => "text-jp-2-light-gray-1500 fill-jp-2-light-gray-1500"
      | Normal => "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000"
      }
    | Subtle =>
      switch buttonState {
      | Disabled => "text-jp-2-light-gray-600 fill-jp-2-light-gray-600"
      | Loading => "text-jp-2-light-gray-1500 fill-jp-2-light-gray-1500"
      | Normal => "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000"
      }
    | NoFill =>
      switch buttonState {
      | Disabled => "text-jp-2-light-gray-600 fill-jp-2-light-gray-600"
      | Loading => "text-jp-2-light-gray-1500 fill-jp-2-light-gray-1500"
      | Normal => "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000"
      }
    }
  | Success =>
    switch btnBgVariant {
    | Solid =>
      switch buttonState {
      | Disabled => "text-white fill-white"
      | Loading => "text-white fill-white"
      | Normal => "text-white fill-white"
      }
    | Subtle =>
      switch buttonState {
      | Disabled => "text-jp-2-light-green-300 fill-jp-2-light-green-300"
      | Loading => "text-jp-2-light-green-600 fill-jp-2-light-green-600"
      | Normal => "text-jp-2-light-green-600 fill-jp-2-light-green-600"
      }
    | NoFill =>
      switch buttonState {
      | Disabled => "text-jp-2-light-green-300 fill-jp-2-light-green-300"
      | Loading => "text-jp-2-light-green-600 fill-jp-2-light-green-600"
      | Normal => "text-jp-2-light-green-600 fill-jp-2-light-green-600"
      }
    }
  }

let useGetTextColor = (~buttonType, ~buttonState, ~btnBgVariant, ()) => {
  getTextColor(~buttonType, ~buttonState, ~btnBgVariant, ())
}

@react.component
let make = (
  ~loadingText="Loading..",
  ~buttonState="Normal",
  ~text=?,
  ~isSelectBoxButton=false,
  ~buttonType="Primary",
  ~btnBgVariant="Solid",
  ~isDropdownOpen=false,
  ~buttonVariant="Fit",
  ~buttonSize="Large",
  ~leftIcon: option<React.element>=?,
  ~rightIcon: option<React.element>=?,
  ~type_="button",
  ~flattenBottom=false,
  ~flattenTop=false,
  ~onEnterPress=true,
  ~onClick=?,
  ~allowButtonTextMinWidth=true,
  ~badge=defaultBadge,
  ~ellipsisOnly=false,
  ~isPhoneDropdown=false,
) => {
  // converting props to Defined Variants
  let buttonState = switch buttonState {
  | "Loading" => Loading
  | "Disabled" => Disabled
  | _ => Normal
  }
  let buttonType = switch buttonType {
  | "Secondary" => Secondary
  | "Delete" => Delete
  | "Success" => Success
  | _ => Primary
  }
  let btnBgVariant = switch btnBgVariant {
  | "Subtle" => Subtle
  | "NoFill" => NoFill
  | _ => Solid
  }
  let buttonVariant = switch buttonVariant {
  | "Long" => Long
  | "Full" => Full
  | "Rounded" => Rounded
  | _ => Fit
  }
  let buttonSize = switch buttonSize {
  | "Medium" => Medium
  | "Small" => Small
  | _ => Large
  }
  let badge: badge = {
    value: badge->Js.Dict.get("value")->Belt.Option.getWithDefault("1"),
    color: {
      let color = badge->Js.Dict.get("color")->Belt.Option.getWithDefault("NoBadge")
      switch color {
      | "BadgeBlue" => BadgeBlue
      | _ => NoBadge
      }
    },
  }

  let customTextOverFlowClass = "overflow-hidden"
  let lengthStyle = switch buttonVariant {
  | Fit => ""
  | Long => "w-92.5"
  | Full => "w-full"
  | Rounded => buttonSize === Large ? "w-12" : "w-10"
  }

  let badgeColor = switch buttonState {
  | Disabled => "bg-slate-300"
  | _ =>
    switch badge.color {
    | BadgeBlue => "bg-jp-2-light-primary-600 font-medium"
    | NoBadge => "hidden"
    }
  }

  let badgeTextColor = switch buttonState {
  | Disabled => "text-white"
  | _ => "text-white"
  }

  let heightClass = switch buttonSize {
  | Small => "h-8"
  | Medium => "h-10"
  | Large => "h-12"
  }

  let cursorType = switch buttonState {
  | Loading => "cursor-wait"
  | Disabled => "cursor-not-allowed"
  | _ => "cursor-pointer"
  }

  let paddingClass = if buttonVariant === Rounded {
    ""
  } else {
    switch buttonSize {
    | Small => "px-4 py-1.75"
    | Medium => "px-4 py-2.5"
    | Large => "px-5 py-4"
    }
  }

  let textSize = switch buttonSize {
  | Large
  | Medium => "text-fs-14"
  | Small => "text-fs-12"
  }

  let ellipsisClass = ellipsisOnly ? "truncate" : ""
  let ellipsisParentClass = ellipsisOnly ? "max-w-[250px] md:max-w-xs" : ""

  let iconSize = switch buttonSize {
  | Large
  | Medium => "w-5 h-5"
  | Small => "w-3.5 h-3.5"
  }

  let badgeSpacing = switch buttonSize {
  | Small
  | Medium => "px-2 mr-0.5"
  | Large => "px-2 mb-1 mr-0.5"
  }
  let badgeTextSize = switch buttonSize {
  | Small
  | Medium => "text-sm"
  | Large => "text-base"
  }

  let backColor = useGetBgColor(~buttonType, ~buttonState, ~btnBgVariant, ())
  let textColor = useGetTextColor(~buttonType, ~buttonState, ~btnBgVariant, ())

  let roundedClass = {
    let roundedBottom = flattenBottom ? "rounded-b-none" : ""
    let roundedTop = flattenTop ? "rounded-t-none" : ""
    let roundedDirection = switch buttonSize {
    | Large
    | Medium => "rounded-lg"
    | Small => "rounded-md"
    }

    `${roundedDirection} ${roundedBottom} ${roundedTop}`
  }

  let dis = switch buttonState {
  | Normal => false
  | _ => true
  }

  let handleClick = ev => {
    switch onClick {
    | Some(fn) => fn(ev)

    | None => ()
    }
  }

  let textWeight = if buttonType === Secondary && buttonState === Disabled {
    "font-medium"
  } else {
    "font-semibold"
  }

  let conditionalButtonStyles = `${allowButtonTextMinWidth
      ? "min-w-min"
      : ""} ${backColor} ${roundedClass}`

  let newThemeGap = switch buttonSize {
  | Large
  | Medium => "gap-2"
  | Small => "gap-1.5"
  }

  <button
    type_
    disabled=dis
    onKeyUp={e => e->ReactEvent.Keyboard.preventDefault}
    onKeyPress={e => {
      if !onEnterPress {
        e->ReactEvent.Keyboard.preventDefault
      }
    }}
    className={`flex justify-center ${heightClass} ${newThemeGap} ${conditionalButtonStyles} items-center  ${textColor} ${cursorType} ${paddingClass} ${lengthStyle} ${customTextOverFlowClass}`}
    onClick=handleClick>
    {if buttonState == Loading {
      <span className={`flex items-center mx-2 animate-spin`}>
        <svg className=iconSize viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C12.5523 1 13 1.44772 13 2V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V2C11 1.44772 11.4477 1 12 1ZM4.21447 4.29283C4.60499 3.90231 5.23815 3.90231 5.62868 4.29283L8.45711 7.12126C8.84763 7.51179 8.84763 8.14495 8.45711 8.53548C8.06658 8.926 7.43342 8.926 7.04289 8.53548L4.21447 5.70705C3.82394 5.31652 3.82394 4.68336 4.21447 4.29283ZM19.7855 4.29283C20.1761 4.68336 20.1761 5.31652 19.7855 5.70705L16.9571 8.53548C16.5666 8.926 15.9334 8.926 15.5429 8.53548C15.1524 8.14495 15.1524 7.51179 15.5429 7.12126L18.3713 4.29284C18.7618 3.90231 19.395 3.90231 19.7855 4.29283ZM1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H2C1.44772 13 1 12.5523 1 12ZM17 12C17 11.4477 17.4477 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18C17.4477 13 17 12.5523 17 12ZM8.45711 15.5429C8.84763 15.9334 8.84763 16.5666 8.45711 16.9571L5.62868 19.7855C5.23815 20.1761 4.60499 20.1761 4.21447 19.7855C3.82394 19.395 3.82394 18.7618 4.21447 18.3713L7.04289 15.5429C7.43342 15.1524 8.06658 15.1524 8.45711 15.5429ZM15.5429 15.5429C15.9334 15.1524 16.5666 15.1524 16.9571 15.5429L19.7855 18.3713C20.1761 18.7618 20.1761 19.395 19.7855 19.7855C19.395 20.1761 18.7618 20.1761 18.3713 19.7855L15.5429 16.9571C15.1524 16.5666 15.1524 15.9334 15.5429 15.5429ZM12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z"
          />
        </svg>
      </span>
    } else {
      switch leftIcon {
      | Some(icon) => <div className=iconSize> icon </div>
      | None => React.null
      }
    }}
    {switch text {
    | Some(textStr) =>
      if textStr !== "" {
        <div className=ellipsisParentClass>
          <div className={`${textSize} ${textWeight} ${ellipsisClass} whitespace-pre`}>
            {buttonState == Loading ? React.string(loadingText) : React.string(textStr)}
          </div>
        </div>
      } else {
        React.null
      }

    | None => React.null
    }}
    {switch badge.color {
    | NoBadge => React.null
    | _ =>
      <span
        className={`flex items-center ${badgeColor} ${badgeTextColor} ${badgeSpacing} ${badgeTextSize}  rounded-full`}>
        {React.string(badge.value)}
      </span>
    }}
    {switch rightIcon {
    | Some(icon) => <div className=iconSize> icon </div>
    | None => React.null
    }}
  </button>
}
