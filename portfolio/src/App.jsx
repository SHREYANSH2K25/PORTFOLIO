import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Index used to show home page path or source path */}
          {/* "*" used to show other non existing pages*/}
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
