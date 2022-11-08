import Testimonials from "./components/Testimonials";
import Presentation from "./components/Presentation";
import Elipse from "./assets/Ellipse.png"
const App = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Testimonials
                    image={Elipse}
                    name="John Doe"
                    content="Give everyone you work with -- inside"
                    star={[0, 1, 2, 3, 4]}
                />

                <Presentation floorImg="https://i.pinimg.com/736x/b1/51/64/b15164ed0786c407172ef08ad29bd354.jpg"
                    contet="Why do we use it? "
                    fontContent="  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
                    juctTime='2nd January ,2022'
                    name='bayra' />
            </div>
        </div>
    );
};

export default App;