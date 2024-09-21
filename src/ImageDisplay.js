import park from "./assets/images/park.jpg";

function ImageDisplay(){
    return(
        <div>

            <h1>
                First way as SRC method
            </h1>

            <img height={200} src ={park} alt="An image of park" />

            <h1>
                Second way as REQUIRE method
            </h1>

            <img height={200} src = {require("./assets/images/park.jpg")} alt="An image of park" />

            <h1>
                Third way as URL method
            </h1>

            <img height={200} src ={park} alt="An image of park" />


        </div>
    );
}

export default ImageDisplay;