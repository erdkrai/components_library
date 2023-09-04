open Button
module Section = {
  @react.component
  let make = (~heading, ~children) => {
    <div className="mb-12">
      <div
        className="font-bold text-2xl mb-4 border-b-2 w-max text-jp-gray-900 border-jp-gray-900 dark:text-jp-gray-text_darktheme dark:border-jp-gray-text_darktheme">
        {React.string(heading)}
      </div>
      <div className="flex flex-col items-center py-5 gap-10">
        {children->React.Children.map(element => {
          element
        })}
      </div>
    </div>
  }
}

module ButtonsList = {
  @react.component
  let make = (~heading) => {
    let buttonType = heading

    let text = "Create User"
    let leftIcon = switch heading {
    | "Primary" =>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99995 3.33341C8.38912 3.33341 7.08328 4.63925 7.08328 6.25008C7.08328 7.86091 8.38912 9.16675 9.99995 9.16675C11.6108 9.16675 12.9166 7.86091 12.9166 6.25008C12.9166 4.63925 11.6108 3.33341 9.99995 3.33341ZM5.41661 6.25008C5.41661 3.71878 7.46864 1.66675 9.99995 1.66675C12.5313 1.66675 14.5833 3.71878 14.5833 6.25008C14.5833 8.78139 12.5313 10.8334 9.99995 10.8334C7.46864 10.8334 5.41661 8.78139 5.41661 6.25008ZM7.77184 12.0834C7.81939 12.0834 7.86764 12.0834 7.91662 12.0834H12.0833C12.1323 12.0834 12.1805 12.0834 12.2281 12.0834C13.2508 12.083 13.9491 12.0827 14.5428 12.2628C15.8745 12.6668 16.9166 13.7089 17.3205 15.0406C17.5006 15.6342 17.5004 16.3326 17.5 17.3553C17.5 17.4029 17.4999 17.4511 17.4999 17.5001C17.4999 17.9603 17.1269 18.3334 16.6666 18.3334C16.2064 18.3334 15.8333 17.9603 15.8333 17.5001C15.8333 16.2765 15.8242 15.8494 15.7256 15.5244C15.4833 14.7254 14.858 14.1001 14.059 13.8577C13.7339 13.7591 13.3069 13.7501 12.0833 13.7501H7.91662C6.69302 13.7501 6.26596 13.7591 5.9409 13.8577C5.1419 14.1001 4.51664 14.7254 4.27426 15.5244C4.17566 15.8494 4.16661 16.2765 4.16661 17.5001C4.16661 17.9603 3.79352 18.3334 3.33328 18.3334C2.87304 18.3334 2.49995 17.9603 2.49995 17.5001C2.49995 17.4511 2.49993 17.4029 2.49991 17.3553C2.49953 16.3326 2.49928 15.6342 2.67936 15.0406C3.08332 13.7089 4.12542 12.6668 5.45709 12.2628C6.05076 12.0827 6.74911 12.083 7.77184 12.0834Z"
        />
      </svg>
    | "Secondary" =>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99995 3.33329C8.38912 3.33329 7.08328 4.63913 7.08328 6.24996C7.08328 7.86079 8.38912 9.16663 9.99995 9.16663C11.6108 9.16663 12.9166 7.86079 12.9166 6.24996C12.9166 4.63913 11.6108 3.33329 9.99995 3.33329ZM5.41661 6.24996C5.41661 3.71865 7.46864 1.66663 9.99995 1.66663C12.5313 1.66663 14.5833 3.71865 14.5833 6.24996C14.5833 8.78126 12.5313 10.8333 9.99995 10.8333C7.46864 10.8333 5.41661 8.78126 5.41661 6.24996ZM7.77184 12.0833C7.81939 12.0833 7.86764 12.0833 7.91662 12.0833H12.0833C12.1323 12.0833 12.1805 12.0833 12.2281 12.0833C13.2508 12.0829 13.9491 12.0826 14.5428 12.2627C15.8745 12.6667 16.9166 13.7088 17.3205 15.0404C17.5006 15.6341 17.5004 16.3324 17.5 17.3552C17.5 17.4027 17.4999 17.451 17.4999 17.5C17.4999 17.9602 17.1269 18.3333 16.6666 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5C15.8333 16.2764 15.8242 15.8493 15.7256 15.5242C15.4833 14.7252 14.858 14.1 14.059 13.8576C13.7339 13.759 13.3069 13.75 12.0833 13.75H7.91662C6.69302 13.75 6.26595 13.759 5.9409 13.8576C5.1419 14.1 4.51664 14.7252 4.27426 15.5242C4.17566 15.8493 4.16661 16.2764 4.16661 17.5C4.16661 17.9602 3.79352 18.3333 3.33328 18.3333C2.87304 18.3333 2.49995 17.9602 2.49995 17.5C2.49995 17.451 2.49993 17.4027 2.49991 17.3552C2.49953 16.3325 2.49928 15.6341 2.67936 15.0404C3.08332 13.7088 4.12542 12.6667 5.45709 12.2627C6.05076 12.0826 6.74911 12.0829 7.77184 12.0833Z"
        />
      </svg>
    | _ =>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99995 3.33341C8.38912 3.33341 7.08328 4.63925 7.08328 6.25008C7.08328 7.86091 8.38912 9.16675 9.99995 9.16675C11.6108 9.16675 12.9166 7.86091 12.9166 6.25008C12.9166 4.63925 11.6108 3.33341 9.99995 3.33341ZM5.41661 6.25008C5.41661 3.71878 7.46864 1.66675 9.99995 1.66675C12.5313 1.66675 14.5833 3.71878 14.5833 6.25008C14.5833 8.78139 12.5313 10.8334 9.99995 10.8334C7.46864 10.8334 5.41661 8.78139 5.41661 6.25008ZM7.77184 12.0834C7.81939 12.0834 7.86764 12.0834 7.91662 12.0834H12.0833C12.1323 12.0834 12.1805 12.0834 12.2281 12.0834C13.2508 12.083 13.9491 12.0827 14.5428 12.2628C15.8745 12.6668 16.9166 13.7089 17.3205 15.0406C17.5006 15.6342 17.5004 16.3326 17.5 17.3553C17.5 17.4029 17.4999 17.4511 17.4999 17.5001C17.4999 17.9603 17.1269 18.3334 16.6666 18.3334C16.2064 18.3334 15.8333 17.9603 15.8333 17.5001C15.8333 16.2765 15.8242 15.8494 15.7256 15.5244C15.4833 14.7254 14.858 14.1001 14.059 13.8577C13.7339 13.7591 13.3069 13.7501 12.0833 13.7501H7.91662C6.69302 13.7501 6.26596 13.7591 5.9409 13.8577C5.1419 14.1001 4.51664 14.7254 4.27426 15.5244C4.17566 15.8494 4.16661 16.2765 4.16661 17.5001C4.16661 17.9603 3.79352 18.3334 3.33328 18.3334C2.87304 18.3334 2.49995 17.9603 2.49995 17.5001C2.49995 17.4511 2.49993 17.4029 2.49991 17.3553C2.49953 16.3326 2.49928 15.6342 2.67936 15.0406C3.08332 13.7089 4.12542 12.6668 5.45709 12.2628C6.05076 12.0827 6.74911 12.083 7.77184 12.0834Z"
        />
      </svg>
    }

    let rightIcon = switch heading {
    | "Primary" =>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99995 3.33341C8.38912 3.33341 7.08328 4.63925 7.08328 6.25008C7.08328 7.86091 8.38912 9.16675 9.99995 9.16675C11.6108 9.16675 12.9166 7.86091 12.9166 6.25008C12.9166 4.63925 11.6108 3.33341 9.99995 3.33341ZM5.41661 6.25008C5.41661 3.71878 7.46864 1.66675 9.99995 1.66675C12.5313 1.66675 14.5833 3.71878 14.5833 6.25008C14.5833 8.78139 12.5313 10.8334 9.99995 10.8334C7.46864 10.8334 5.41661 8.78139 5.41661 6.25008ZM7.77184 12.0834C7.81939 12.0834 7.86764 12.0834 7.91662 12.0834H12.0833C12.1323 12.0834 12.1805 12.0834 12.2281 12.0834C13.2508 12.083 13.9491 12.0827 14.5428 12.2628C15.8745 12.6668 16.9166 13.7089 17.3205 15.0406C17.5006 15.6342 17.5004 16.3326 17.5 17.3553C17.5 17.4029 17.4999 17.4511 17.4999 17.5001C17.4999 17.9603 17.1269 18.3334 16.6666 18.3334C16.2064 18.3334 15.8333 17.9603 15.8333 17.5001C15.8333 16.2765 15.8242 15.8494 15.7256 15.5244C15.4833 14.7254 14.858 14.1001 14.059 13.8577C13.7339 13.7591 13.3069 13.7501 12.0833 13.7501H7.91662C6.69302 13.7501 6.26596 13.7591 5.9409 13.8577C5.1419 14.1001 4.51664 14.7254 4.27426 15.5244C4.17566 15.8494 4.16661 16.2765 4.16661 17.5001C4.16661 17.9603 3.79352 18.3334 3.33328 18.3334C2.87304 18.3334 2.49995 17.9603 2.49995 17.5001C2.49995 17.4511 2.49993 17.4029 2.49991 17.3553C2.49953 16.3326 2.49928 15.6342 2.67936 15.0406C3.08332 13.7089 4.12542 12.6668 5.45709 12.2628C6.05076 12.0827 6.74911 12.083 7.77184 12.0834Z"
        />
      </svg>
    | "Secondary" =>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99995 3.33329C8.38912 3.33329 7.08328 4.63913 7.08328 6.24996C7.08328 7.86079 8.38912 9.16663 9.99995 9.16663C11.6108 9.16663 12.9166 7.86079 12.9166 6.24996C12.9166 4.63913 11.6108 3.33329 9.99995 3.33329ZM5.41661 6.24996C5.41661 3.71865 7.46864 1.66663 9.99995 1.66663C12.5313 1.66663 14.5833 3.71865 14.5833 6.24996C14.5833 8.78126 12.5313 10.8333 9.99995 10.8333C7.46864 10.8333 5.41661 8.78126 5.41661 6.24996ZM7.77184 12.0833C7.81939 12.0833 7.86764 12.0833 7.91662 12.0833H12.0833C12.1323 12.0833 12.1805 12.0833 12.2281 12.0833C13.2508 12.0829 13.9491 12.0826 14.5428 12.2627C15.8745 12.6667 16.9166 13.7088 17.3205 15.0404C17.5006 15.6341 17.5004 16.3324 17.5 17.3552C17.5 17.4027 17.4999 17.451 17.4999 17.5C17.4999 17.9602 17.1269 18.3333 16.6666 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5C15.8333 16.2764 15.8242 15.8493 15.7256 15.5242C15.4833 14.7252 14.858 14.1 14.059 13.8576C13.7339 13.759 13.3069 13.75 12.0833 13.75H7.91662C6.69302 13.75 6.26595 13.759 5.9409 13.8576C5.1419 14.1 4.51664 14.7252 4.27426 15.5242C4.17566 15.8493 4.16661 16.2764 4.16661 17.5C4.16661 17.9602 3.79352 18.3333 3.33328 18.3333C2.87304 18.3333 2.49995 17.9602 2.49995 17.5C2.49995 17.451 2.49993 17.4027 2.49991 17.3552C2.49953 16.3325 2.49928 15.6341 2.67936 15.0404C3.08332 13.7088 4.12542 12.6667 5.45709 12.2627C6.05076 12.0826 6.74911 12.0829 7.77184 12.0833Z"
        />
      </svg>
    | _ =>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99995 3.33341C8.38912 3.33341 7.08328 4.63925 7.08328 6.25008C7.08328 7.86091 8.38912 9.16675 9.99995 9.16675C11.6108 9.16675 12.9166 7.86091 12.9166 6.25008C12.9166 4.63925 11.6108 3.33341 9.99995 3.33341ZM5.41661 6.25008C5.41661 3.71878 7.46864 1.66675 9.99995 1.66675C12.5313 1.66675 14.5833 3.71878 14.5833 6.25008C14.5833 8.78139 12.5313 10.8334 9.99995 10.8334C7.46864 10.8334 5.41661 8.78139 5.41661 6.25008ZM7.77184 12.0834C7.81939 12.0834 7.86764 12.0834 7.91662 12.0834H12.0833C12.1323 12.0834 12.1805 12.0834 12.2281 12.0834C13.2508 12.083 13.9491 12.0827 14.5428 12.2628C15.8745 12.6668 16.9166 13.7089 17.3205 15.0406C17.5006 15.6342 17.5004 16.3326 17.5 17.3553C17.5 17.4029 17.4999 17.4511 17.4999 17.5001C17.4999 17.9603 17.1269 18.3334 16.6666 18.3334C16.2064 18.3334 15.8333 17.9603 15.8333 17.5001C15.8333 16.2765 15.8242 15.8494 15.7256 15.5244C15.4833 14.7254 14.858 14.1001 14.059 13.8577C13.7339 13.7591 13.3069 13.7501 12.0833 13.7501H7.91662C6.69302 13.7501 6.26596 13.7591 5.9409 13.8577C5.1419 14.1001 4.51664 14.7254 4.27426 15.5244C4.17566 15.8494 4.16661 16.2765 4.16661 17.5001C4.16661 17.9603 3.79352 18.3334 3.33328 18.3334C2.87304 18.3334 2.49995 17.9603 2.49995 17.5001C2.49995 17.4511 2.49993 17.4029 2.49991 17.3553C2.49953 16.3326 2.49928 15.6342 2.67936 15.0406C3.08332 13.7089 4.12542 12.6668 5.45709 12.2628C6.05076 12.0827 6.74911 12.083 7.77184 12.0834Z"
        />
      </svg>
    }

    {
      ["Solid", "Subtle", "NoFill"]
      ->Js.Array2.mapi((btnBgVariant, index) => {
        let heading = heading ++ " - " ++ btnBgVariant
        <Section key={index->Belt.Int.toString} heading>
          {["Normal", "Loading", "Disabled"]
          ->Js.Array2.map(buttonState => {
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-6">
                {[Fit, Long]
                ->Js.Array2.mapi(
                  (buttonVariant, index) => {
                    <Button
                      key={"Medium - " ++ index->Belt.Int.toString}
                      text
                      buttonType
                      btnBgVariant
                      leftIcon
                      rightIcon
                      buttonSize={Large}
                      buttonVariant
                      buttonState
                    />
                  },
                )
                ->React.array}
              </div>
              <div className="flex items-center gap-6">
                {[Fit, Long]
                ->Js.Array2.mapi(
                  (buttonVariant, index) => {
                    <Button
                      key={"Small - " ++ index->Belt.Int.toString}
                      text
                      buttonType
                      btnBgVariant
                      leftIcon
                      rightIcon
                      buttonSize={Medium}
                      buttonVariant
                      buttonState
                    />
                  },
                )
                ->React.array}
              </div>
              <div className="flex items-center gap-6">
                {[Fit, Long]
                ->Js.Array2.mapi(
                  (buttonVariant, index) => {
                    <Button
                      key={"XSmall - " ++ index->Belt.Int.toString}
                      text
                      buttonType
                      btnBgVariant
                      leftIcon
                      rightIcon
                      buttonSize={Small}
                      buttonVariant
                      buttonState
                    />
                  },
                )
                ->React.array}
              </div>
            </div>
          })
          ->React.array}
        </Section>
      })
      ->React.array
    }
  }
}

@react.component
let make = () => {
  <div className="flex flex-1 flex-col overflow-scroll p-12">
    <ButtonsList heading="Primary" />
    <ButtonsList heading="Secondary" />
    <ButtonsList heading="Delete" />
    <ButtonsList heading="Success" />
  </div>
}
