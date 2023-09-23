import React from "react";
import Details from './Details'

const Card = () => {
    return (
       <div>
        <div className="food-card">
            <Details image="./src/components/kareKare2.jpg" name="Kare Kare" description="Filipino stew with a rich peanut sauce and ox tail." a_button="Recipe!" link="https://panlasangpinoy.com/kare-kare-recipe/"/></div>
        <div className="food-card">
            <Details image="./src/components/lumpiashanghai.webp" name="Lumpia Shanghai" description="A very tasty egg roll. Usually contains ground pork, carrots and few more vegetables." a_button="Recipe!" link="https://panlasangpinoy.com/filipino-lumpia-recipe/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/diniguan.jpg" name="Pork Dinuguan" description="Made with the pig blood! Who knew that can be so delicious?" a_button="Recipe!" link="https://panlasangpinoy.com/pork-dinuguan-isaw-at-tenga/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/lomi.jpg" name="Lomi" description="Batangas Lomi is a must have, especially on cold winter days!" a_button="Recipe!" link="https://www.yummy.ph/recipe/batangas-lomi-recipe-a157-20190730" />
        </div>
        <div className="food-card">
            <Details image="./src/components/sisig.jpg" name="Pork Sisig" description="A popular Filipino dish. Contains mostly pork and peppers." a_button="Recipe!" link="https://panlasangpinoy.com/pork-sisig/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/AdoboChicken.jpg" name="Chicken Adobo" description="One of the most recognizable Filipino foods. This is made from stewing chicken in vinegar and soy sauce." a_button="Recipe!" link="https://panlasangpinoy.com/filipino-chicken-adobo-recipe/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/bulalo.webp" name="Bulalo" description="The classic beef stew of the Philippines" a_button="Recipe!" link="https://panlasangpinoy.com/bulalo-stewed-beef-shank/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/crispypata.jpg" name="Crispy Pata" description="Cripsy pork, often eaten during celebrations and parties!" a_button="Recipe!" link="https://panlasangpinoy.com/crispy-pata/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/breakfast.jpg" name="Hotsilog" description="A breakfast comprising of hotdogs, fried rice and fried egg. Must have banana ketchup as a condiment!" a_button="Recipe!" link="https://panlasangpinoy.com/hotsilog-hotdog-sinangang-at-itlog/" />
        </div>
        <div className="food-card">
            <Details image="./src/components/filipinospaget.jpg" name="Filipino Spaghetti" description="The Filipino version of spaghetti. Also served in Jollibee." a_button="Recipe!" link="https://panlasangpinoy.com/filipino-style-spaghetti/" />
        </div>
       </div>
    )
}

export default Card;