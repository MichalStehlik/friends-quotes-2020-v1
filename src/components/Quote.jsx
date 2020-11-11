import {ListGroupItem} from "reactstrap";

const Quote = ({item}) => (
    <ListGroupItem>
        {item.quote}
    </ListGroupItem>
);

export default Quote;