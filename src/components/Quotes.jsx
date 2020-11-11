import {useState, useEffect, useCallback} from "react";
import QuotesList from "./QuotesList";
import {Alert, Spinner} from "reactstrap";
import axios from "axios";

const Quotes = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get("https://friends-quotes-api.herokuapp.com/quotes")
        .then(response => {
            setItems(response.data);
            setError(false);
        })
        .catch(error => {
            setError(true);
            setItems([]);
        })
        .then(()=>{
            setIsLoading(false);
        })
    },[]);
    if (error)
    {
        return <Alert color="danger">There was an error.</Alert>
    }
    else if (isLoading)
    {
        return <Spinner color="success" />
    }
    else if (items)
    {
        return (
            <QuotesList items={items} />
        );
    }
    else
    {
        return <Spinner color="primary" />;
    }
}

export default Quotes;

// https://friends-quotes-api.herokuapp.com/