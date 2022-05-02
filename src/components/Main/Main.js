import style from "./Main.module.scss"
import kogle from "../../assets/images/kogle.jpg"
import {Slider} from "./Slider/Slider"


export const Main = () => {
    return (
        <main className={style.container}>
            <h1>Yesa, helloa worlda</h1>
            <Slider className="slider"/>

            <article>
                <p>
                    It'sa texta about the pagea, many linesa, lorema no worka
                </p>

                <img src={kogle} alt="Det er en kogle"/>
            </article>

        </main>
    )
}
