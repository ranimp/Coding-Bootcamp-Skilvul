import { CardContainer, CardImage, CardBody, CardPrice, CardProductName} from './styles/Card';

import Button from './Button';


const Card = (props) => {
  const price = props.products.price
  const productname = props.products.productName
  return (
    <CardContainer width="400px">
      <CardImage src={props.products.imageUrl} height="400px" />
      <CardBody>
        <CardPrice>{price}</CardPrice>
        <CardProductName>{productname}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
