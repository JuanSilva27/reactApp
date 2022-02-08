import Footer from "./Footer"
import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop"

function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
                <TopBar />
                <ContentRowTop/>
            </div>
            <Footer />
        </div>
    )
}

export default ContentWrapper