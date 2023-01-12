import { ContainerProduct, ContentProduct, ImageContainer } from "./style";
import ImageSofa from "../../assets/Sofa_boraCodar_1.png" 
import ImageSofaGif from "../../assets/sofa.gif"
import IconeFechar from "../../assets/fechar.svg"
import IconeRotacionar from "../../assets/rotacionar.svg"

interface ProductsProps {
    isActive: boolean;
    code: string;
    description: string;
    price: string;
    rotation(): void;
    close(): void;
}

export function CardProduct({isActive =  false, price, code, description, close, rotation}: ProductsProps) {
    return (
        <ContainerProduct>
            <ImageContainer>
                {isActive === false ?
                <>
                <button onClick={rotation}>
                    <img src={IconeRotacionar} alt="" />
                </button>
                <img src={ImageSofa} alt="" /> 
                </> :       
                <>
                <button onClick={close}> 
                    <img src={IconeFechar} className= "buttonClose" alt="" />
                </button>
                <img src={ImageSofaGif} alt="" /> 
                </>
                 }
            </ImageContainer>

            <ContentProduct>
                <span>CÓDIGO: {code} </span>
            <h2> {description} </h2>
                <span> {price} </span>

                <button>ADICIONAR À CESTA</button>
            </ContentProduct>
        </ContainerProduct>
    )
}