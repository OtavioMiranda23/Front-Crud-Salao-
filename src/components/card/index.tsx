import { Block,  CardContainer, CardContent } from "./styles";

export default function Card() {
    return (

            <CardContainer>
                <CardContent>
                        <input type="checkbox" />
                    <Block>
                            <span>Otávio</span>
                            <span>966294327</span>                         
                            <p>05/04/2023: 16h</p>                
                    </Block>       
                        <button>Fav</button>
                </CardContent>
            </CardContainer>
     
    )
}