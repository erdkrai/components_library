%%raw("import './index.css'")
%%raw(`require("tailwindcss/tailwind.css")`)
let \"Button" = Button.make
switch ReactDOM.querySelector("#root") {
| Some(domElement) =>
  ReactDOM.Client.createRoot(domElement)->ReactDOM.Client.Root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
| None => ()
}
