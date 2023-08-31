// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";

function getBGColor(buttonType, buttonState, showBorder, btnBgVariant, param) {
  switch (buttonType) {
    case /* Primary */0 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "bg-jp-2-light-primary-600 hover:bg-jp-2-light-primary-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-primary-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-primary-600";
                case /* Disabled */2 :
                    return "bg-jp-2-light-primary-300 shadow-jp-2-xs";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "bg-jp-2-light-primary-200 hover:bg-jp-2-light-primary-300 focus:outline-none focus:shadow-jp-2-sm-primary-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-primary-200";
                case /* Disabled */2 :
                    return "bg-jp-2-light-primary-100";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "hover:bg-jp-2-light-primary-200 focus:outline-none focus:shadow-jp-2-sm-primary-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-primary-200";
                case /* Disabled */2 :
                    return "";
                
              }
          
        }
    case /* Secondary */1 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                    if (showBorder) {
                      return "bg-white hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-gray-focus";
                    } else {
                      return "hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs";
                    }
                case /* Loading */1 :
                    if (showBorder) {
                      return "bg-white text-jp-gray-890";
                    } else {
                      return "text-jp-gray-890";
                    }
                case /* Disabled */2 :
                    if (showBorder) {
                      return "bg-jp-2-light-gray-300 shadow-jp-2-xs";
                    } else {
                      return "px-4 shadow-jp-2-xs";
                    }
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                    if (showBorder) {
                      return "bg-white hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-gray-focus";
                    } else {
                      return "hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs";
                    }
                case /* Loading */1 :
                    if (showBorder) {
                      return "bg-white text-jp-gray-890";
                    } else {
                      return "text-jp-gray-890";
                    }
                case /* Disabled */2 :
                    if (showBorder) {
                      return "bg-jp-2-light-gray-300 shadow-jp-2-xs";
                    } else {
                      return "px-4 shadow-jp-2-xs";
                    }
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                    if (showBorder) {
                      return "bg-white hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-gray-focus";
                    } else {
                      return "hover:bg-jp-2-light-gray-100 focus:outline-none shadow-jp-2-xs";
                    }
                case /* Loading */1 :
                    if (showBorder) {
                      return "bg-white text-jp-gray-890";
                    } else {
                      return "text-jp-gray-890";
                    }
                case /* Disabled */2 :
                    if (showBorder) {
                      return "bg-jp-2-light-gray-300 shadow-jp-2-xs";
                    } else {
                      return "px-4 shadow-jp-2-xs";
                    }
                
              }
          
        }
    case /* Delete */2 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "bg-jp-2-light-red-600 hover:bg-jp-2-light-red-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-error-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-red-600";
                case /* Disabled */2 :
                    return "bg-jp-2-light-red-300 shadow-jp-2-xs";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "bg-jp-2-light-red-200 hover:bg-jp-2-light-red-300 focus:outline-none focus:shadow-jp-2-sm-error-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-red-200";
                case /* Disabled */2 :
                    return "bg-jp-2-light-red-100";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "hover:bg-jp-2-light-red-200 focus:outline-none focus:shadow-jp-2-sm-error-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-red-200";
                case /* Disabled */2 :
                    return "";
                
              }
          
        }
    case /* Success */3 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "bg-jp-2-light-green-600 hover:bg-jp-2-light-green-700 focus:outline-none shadow-jp-2-xs focus:shadow-jp-2-sm-error-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-green-600";
                case /* Disabled */2 :
                    return "bg-jp-2-light-green-300 shadow-jp-2-xs";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "bg-jp-2-light-green-200 hover:bg-jp-2-light-green-300 focus:outline-none focus:shadow-jp-2-sm-error-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-green-200";
                case /* Disabled */2 :
                    return "bg-jp-2-light-green-100";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "hover:bg-jp-2-light-green-200 focus:outline-none focus:shadow-jp-2-sm-error-focus";
                case /* Loading */1 :
                    return "bg-jp-2-light-green-200";
                case /* Disabled */2 :
                    return "";
                
              }
          
        }
    
  }
}

function useGetBgColor(buttonType, buttonState, showBorder, btnBgVariant, param) {
  return getBGColor(buttonType, buttonState, showBorder, btnBgVariant, undefined);
}

function getTextColor(buttonType, buttonState, btnBgVariant, param) {
  switch (buttonType) {
    case /* Primary */0 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                case /* Disabled */2 :
                    return "text-white fill-white";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                    return "text-jp-2-light-primary-600 fill-jp-2-light-primary-600";
                case /* Disabled */2 :
                    return "text-jp-2-light-primary-300 fill-jp-2-light-primary-300";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                    return "text-jp-2-light-primary-600 fill-jp-2-light-primary-600";
                case /* Disabled */2 :
                    return "text-jp-2-light-primary-300 fill-jp-2-light-primary-300";
                
              }
          
        }
    case /* Secondary */1 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000";
                case /* Loading */1 :
                case /* Disabled */2 :
                    return "text-jp-2-light-gray-600 fill-jp-2-light-gray-600";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000";
                case /* Loading */1 :
                case /* Disabled */2 :
                    return "text-jp-2-light-gray-600 fill-jp-2-light-gray-600";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                    return "text-jp-2-light-gray-1500 hover:text-jp-2-light-gray-2000 fill-jp-2-light-gray-1500 hover:fill-jp-2-light-gray-2000";
                case /* Loading */1 :
                case /* Disabled */2 :
                    return "text-jp-2-light-gray-600 fill-jp-2-light-gray-600";
                
              }
          
        }
    case /* Delete */2 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                case /* Disabled */2 :
                    return "text-white fill-white";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                    return "text-jp-2-light-red-600 fill-jp-2-light-red-600";
                case /* Disabled */2 :
                    return "text-jp-2-light-red-300 fill-jp-2-light-red-300";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                    return "text-jp-2-light-red-600 fill-jp-2-light-red-600";
                case /* Disabled */2 :
                    return "text-jp-2-light-red-300 fill-jp-2-light-red-300";
                
              }
          
        }
    case /* Success */3 :
        switch (btnBgVariant) {
          case /* Solid */0 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                case /* Disabled */2 :
                    return "text-white fill-white";
                
              }
          case /* Subtle */1 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                    return "text-jp-2-light-green-600 fill-jp-2-light-green-600";
                case /* Disabled */2 :
                    return "text-jp-2-light-green-300 fill-jp-2-light-green-300";
                
              }
          case /* NoFill */2 :
              switch (buttonState) {
                case /* Normal */0 :
                case /* Loading */1 :
                    return "text-jp-2-light-green-600 fill-jp-2-light-green-600";
                case /* Disabled */2 :
                    return "text-jp-2-light-green-300 fill-jp-2-light-green-300";
                
              }
          
        }
    
  }
}

function useGetTextColor(buttonType, buttonState, btnBgVariant, param) {
  return getTextColor(buttonType, buttonState, btnBgVariant, undefined);
}

function Button(props) {
  var ellipsisOnly = props.ellipsisOnly;
  var badge = props.badge;
  var allowButtonTextMinWidth = props.allowButtonTextMinWidth;
  var onClick = props.onClick;
  var onEnterPress = props.onEnterPress;
  var flattenTop = props.flattenTop;
  var flattenBottom = props.flattenBottom;
  var type_ = props.type_;
  var showBorder = props.showBorder;
  var rightIcon = props.rightIcon;
  var leftIcon = props.leftIcon;
  var buttonVariant = props.buttonVariant;
  var btnBgVariant = props.btnBgVariant;
  var buttonType = props.buttonType;
  var text = props.text;
  var buttonState = props.buttonState;
  var loadingText = props.loadingText;
  var loadingText$1 = loadingText !== undefined ? loadingText : "Loading..";
  var buttonState$1 = buttonState !== undefined ? buttonState : /* Normal */0;
  var buttonType$1 = buttonType !== undefined ? buttonType : /* Primary */0;
  var btnBgVariant$1 = btnBgVariant !== undefined ? btnBgVariant : /* Solid */0;
  var buttonVariant$1 = buttonVariant !== undefined ? buttonVariant : /* Fit */0;
  var showBorder$1 = showBorder !== undefined ? showBorder : true;
  var type_$1 = type_ !== undefined ? type_ : "button";
  var flattenBottom$1 = flattenBottom !== undefined ? flattenBottom : false;
  var flattenTop$1 = flattenTop !== undefined ? flattenTop : false;
  var onEnterPress$1 = onEnterPress !== undefined ? onEnterPress : true;
  var allowButtonTextMinWidth$1 = allowButtonTextMinWidth !== undefined ? allowButtonTextMinWidth : true;
  var badge$1 = badge !== undefined ? badge : ({
        value: String(1),
        color: /* NoBadge */1
      });
  var ellipsisOnly$1 = ellipsisOnly !== undefined ? ellipsisOnly : false;
  var buttonSize = Belt_Option.getWithDefault(props.buttonSize, /* Large */0);
  var lengthStyle;
  switch (buttonVariant$1) {
    case /* Fit */0 :
        lengthStyle = "";
        break;
    case /* Long */1 :
        lengthStyle = "w-92.5";
        break;
    case /* Full */2 :
        lengthStyle = "w-full";
        break;
    case /* Rounded */3 :
        lengthStyle = buttonSize === /* Large */0 ? "w-12" : "w-10";
        break;
    
  }
  var badgeColor;
  if (buttonState$1 >= 2) {
    badgeColor = "bg-slate-300";
  } else {
    var match = badge$1.color;
    badgeColor = match ? "hidden" : "bg-jp-2-light-primary-600 font-medium";
  }
  var badgeTextColor = "text-white";
  var heightClass;
  switch (buttonSize) {
    case /* Large */0 :
        heightClass = "h-12";
        break;
    case /* Medium */1 :
        heightClass = "h-10";
        break;
    case /* Small */2 :
        heightClass = "h-8";
        break;
    
  }
  var cursorType;
  switch (buttonState$1) {
    case /* Normal */0 :
        cursorType = "cursor-pointer";
        break;
    case /* Loading */1 :
        cursorType = "cursor-wait";
        break;
    case /* Disabled */2 :
        cursorType = "cursor-not-allowed";
        break;
    
  }
  var paddingClass;
  if (buttonVariant$1 === /* Rounded */3) {
    paddingClass = "";
  } else {
    switch (buttonSize) {
      case /* Large */0 :
          paddingClass = "px-5 py-4";
          break;
      case /* Medium */1 :
          paddingClass = "px-4 py-2.5";
          break;
      case /* Small */2 :
          paddingClass = "px-4 py-1.75";
          break;
      
    }
  }
  var textSize = buttonSize >= 2 ? "text-fs-12" : "text-fs-14";
  var ellipsisClass = ellipsisOnly$1 ? "truncate" : "";
  var ellipsisParentClass = ellipsisOnly$1 ? "max-w-[250px] md:max-w-xs" : "";
  var iconSize = buttonSize >= 2 ? "w-3.5 h-3.5" : "w-5 h-5";
  var badgeSpacing = buttonSize !== 0 ? "px-2 mr-0.5" : "px-2 mb-1 mr-0.5";
  var badgeTextSize = buttonSize !== 0 ? "text-sm" : "text-base";
  var backColor = useGetBgColor(buttonType$1, buttonState$1, showBorder$1, btnBgVariant$1, undefined);
  var textColor = useGetTextColor(buttonType$1, buttonState$1, btnBgVariant$1, undefined);
  var roundedBottom = flattenBottom$1 ? "rounded-b-none" : "";
  var roundedTop = flattenTop$1 ? "rounded-t-none" : "";
  var roundedDirection = buttonSize >= 2 ? "rounded-md" : "rounded-lg";
  var roundedClass = "" + roundedDirection + " " + roundedBottom + " " + roundedTop + "";
  var borderWidth = showBorder$1 ? "border border-x-1 focus:border-x" : "border-0";
  var borderStyle;
  switch (buttonType$1) {
    case /* Primary */0 :
        borderStyle = "";
        break;
    case /* Secondary */1 :
        if (showBorder$1) {
          borderStyle = buttonState$1 >= 2 ? "" + borderWidth + " border-jp-2-light-gray-400" : "" + borderWidth + " border-jp-2-light-gray-600";
        } else {
          switch (buttonState$1) {
            case /* Normal */0 :
            case /* Loading */1 :
                borderStyle = borderWidth;
                break;
            case /* Disabled */2 :
                borderStyle = "";
                break;
            
          }
        }
        break;
    case /* Delete */2 :
        borderStyle = "";
        break;
    case /* Success */3 :
        switch (buttonState$1) {
          case /* Normal */0 :
              borderStyle = "" + borderWidth + " border-jp-gray-500";
              break;
          case /* Loading */1 :
              borderStyle = "" + borderWidth + " border-jp-gray-600 border-opacity-75";
              break;
          case /* Disabled */2 :
              borderStyle = "";
              break;
          
        }
        break;
    
  }
  var dis = buttonState$1 !== 0;
  var handleClick = function (ev) {
    if (onClick !== undefined) {
      return Curry._1(onClick, ev);
    }
    
  };
  var textWeight = buttonType$1 === /* Secondary */1 && buttonState$1 === /* Disabled */2 ? "font-medium" : "font-semibold";
  var conditionalButtonStyles = "" + (
    allowButtonTextMinWidth$1 ? "min-w-min" : ""
  ) + " " + backColor + " " + roundedClass + "";
  var newThemeGap = buttonSize >= 2 ? "gap-1.5" : "gap-2";
  var match$1 = badge$1.color;
  return JsxRuntime.jsxs("button", {
              children: [
                buttonState$1 === /* Loading */1 ? JsxRuntime.jsx("span", {
                        children: JsxRuntime.jsx("svg", {
                              children: JsxRuntime.jsx("path", {
                                    clipRule: "evenodd",
                                    d: "M12 1C12.5523 1 13 1.44772 13 2V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V2C11 1.44772 11.4477 1 12 1ZM4.21447 4.29283C4.60499 3.90231 5.23815 3.90231 5.62868 4.29283L8.45711 7.12126C8.84763 7.51179 8.84763 8.14495 8.45711 8.53548C8.06658 8.926 7.43342 8.926 7.04289 8.53548L4.21447 5.70705C3.82394 5.31652 3.82394 4.68336 4.21447 4.29283ZM19.7855 4.29283C20.1761 4.68336 20.1761 5.31652 19.7855 5.70705L16.9571 8.53548C16.5666 8.926 15.9334 8.926 15.5429 8.53548C15.1524 8.14495 15.1524 7.51179 15.5429 7.12126L18.3713 4.29284C18.7618 3.90231 19.395 3.90231 19.7855 4.29283ZM1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H2C1.44772 13 1 12.5523 1 12ZM17 12C17 11.4477 17.4477 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18C17.4477 13 17 12.5523 17 12ZM8.45711 15.5429C8.84763 15.9334 8.84763 16.5666 8.45711 16.9571L5.62868 19.7855C5.23815 20.1761 4.60499 20.1761 4.21447 19.7855C3.82394 19.395 3.82394 18.7618 4.21447 18.3713L7.04289 15.5429C7.43342 15.1524 8.06658 15.1524 8.45711 15.5429ZM15.5429 15.5429C15.9334 15.1524 16.5666 15.1524 16.9571 15.5429L19.7855 18.3713C20.1761 18.7618 20.1761 19.395 19.7855 19.7855C19.395 20.1761 18.7618 20.1761 18.3713 19.7855L15.5429 16.9571C15.1524 16.5666 15.1524 15.9334 15.5429 15.5429ZM12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z",
                                    fillRule: "evenodd"
                                  }),
                              className: iconSize,
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }),
                        className: "flex items-center mx-2 animate-spin"
                      }) : (
                    leftIcon !== undefined ? JsxRuntime.jsx("div", {
                            children: Caml_option.valFromOption(leftIcon),
                            className: iconSize
                          }) : null
                  ),
                text !== undefined && text !== "" ? JsxRuntime.jsx("div", {
                        children: JsxRuntime.jsx("div", {
                              children: buttonState$1 === /* Loading */1 ? loadingText$1 : text,
                              className: "" + textSize + " " + textWeight + " " + ellipsisClass + " whitespace-pre"
                            }),
                        className: ellipsisParentClass
                      }) : null,
                match$1 ? null : JsxRuntime.jsx("span", {
                        children: badge$1.value,
                        className: "flex items-center " + badgeColor + " " + badgeTextColor + " " + badgeSpacing + " " + badgeTextSize + "  rounded-full"
                      }),
                rightIcon !== undefined ? JsxRuntime.jsx("div", {
                        children: Caml_option.valFromOption(rightIcon),
                        className: iconSize
                      }) : null
              ],
              className: "flex justify-center " + heightClass + " " + newThemeGap + " " + conditionalButtonStyles + " items-center " + borderStyle + "  " + textColor + " " + cursorType + " " + paddingClass + " " + lengthStyle + " overflow-hidden",
              disabled: dis,
              type: type_$1,
              onKeyPress: (function (e) {
                  if (!onEnterPress$1) {
                    e.preventDefault();
                    return ;
                  }
                  
                }),
              onKeyUp: (function (e) {
                  e.preventDefault();
                }),
              onClick: handleClick
            });
}

var make = Button;

export {
  getBGColor ,
  useGetBgColor ,
  getTextColor ,
  useGetTextColor ,
  make ,
}
/* react/jsx-runtime Not a pure module */
