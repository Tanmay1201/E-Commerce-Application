import { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Product.css'
const Product = ({ product }) => {
    const [FavoriteIconClass, setFavoriteIconClass] = useState('FavoriteIconUnset')
    const setFavoriteIcon = () => {
        if (FavoriteIconClass === 'FavoriteIconUnset')
        {
            setFavoriteIconClass('FavoriteIconSet')
        }
        else
        {
            setFavoriteIconClass('FavoriteIconUnset')
        }
    }
    return (
        <div className='Product'>
                            <div>
                                <FavoriteIcon className={FavoriteIconClass} onClick={setFavoriteIcon} />
                                <img src={product.image} height="235px" width="300px" />
                            </div>
                            <div className='ProductName'>
                                <span>
                                    {product.name}
                                </span>
                            </div>
                            <div className='ProductPrice'>
                                <span>
                                    ${product.price}
                                </span>
                            </div>
                            <div className='ProductRating'>
                                <span>
                                    Model - {product.model}
                                </span>
                            </div>
                            
                        </div>
    )
}

export default Product;