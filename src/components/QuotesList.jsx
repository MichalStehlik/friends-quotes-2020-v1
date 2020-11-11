import {ListGroup} from "reactstrap";
import Quote from "./Quote";

const QuotesList = ({items}) => {
    return (
        <ListGroup>
        {items.map((item, index) => (<Quote key={index} item={item} />))}
        </ListGroup>
    );
}

export default QuotesList;