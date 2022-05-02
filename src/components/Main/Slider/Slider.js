import Carousel from 'react-material-ui-carousel'
import "./Slider.scss"
import Slide1 from "../../../assets/images/slide1.jpg"
import Slide2 from "../../../assets/images/slide2.jpg"
import Slide3 from "../../../assets/images/slide3.jpg"


export const Slider = () => {
    const carouselItems = [
        {
            url: Slide1,
            title: "Flot natur",
            alt: "Flot natur"
        },
        {
            url: Slide2,
            title: "Flot natur 2",
            alt: "Flot natur 2"
        },
        {
            url: Slide3,
            title: "Flot natur 3",
            alt: "Flot natur 3"
        },
    ]
    return (

        <Carousel>
            {
                carouselItems.map((item, index) => {
                    return (
                        <Item key={index} item={item}></Item>
                    )
                })
            }
        </Carousel>

    )
}

function Item(props) {
    return (
        <div>
            <h3>{props.item.title}</h3>
            <img alt={props.item.alt} src={props.item.url} />
        </div>
    )
}