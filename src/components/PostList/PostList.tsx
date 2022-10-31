import './PostList.css'
import PostItem from "../PostItem/PostItem";
import {useProducts} from "../hooks/products";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useEffect} from "react";

const PostList = () => {
    const {loading, error, products} = useProducts()
    useEffect(() => {
        console.log('init')
    })

    return (
        <div className="post__list">

            { loading && <Loader/> }
            { error && <ErrorMessage error={error}/> }
            { products.map(product => <PostItem product={product} key={product.id}/>) }
        </div>
    );
};

export default PostList;