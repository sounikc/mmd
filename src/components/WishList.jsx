import { useDispatch, useSelector } from "react-redux";
import WishListItem from "./WishListItem";
import { removeWishList } from "../utils/wishListSlice";

const WishList = ()=>{
    const wishLists = useSelector((store)=>store.wishList.wishItems);
    const dispatch = useDispatch();
    const handleRemoveWishlist =(removeIndex)=>{
        
        dispatch(removeWishList(removeIndex));
        console.log('removeItemIndex==>',removeIndex)
    }
    return (
        <>
        {wishLists.length > 0 ? wishLists.map((wishList, index)=>(
            <WishListItem key={wishList.name} index={index} wishList={wishList} handleRemoveWishlist={handleRemoveWishlist}/>
        )):<>No Wishlist</>}
        </>
    )
}

export default WishList;