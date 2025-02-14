import Layout from "./assets/components/Layout/Layout"
import Header from "./assets/components/Home/Header/Header"
import Footer from "./assets/components/Home/Footer/Footer"
import Routes from "./assets/routes/Routes"

function App() {

  return (
    <Layout>
      <Header />
      <Routes />
      <Footer />
    </Layout>
  )
}

export default App
