import ListingItem from "./ListingItem";
import PropTypes from 'prop-types';

export default function Listing({ items }) {
    if (items.length === 0) return null;
    return (
      <div className="item-list">
        {items.map((item) => (
          <ListingItem
            url={item.url}
            img={item.MainImage}
            title={item.title}
            currencyCode={item.currency_code}
            price={item.price}
            quantity={item.quantity}
            key={item.listing_id}
            id={item.listing_id}
          />
        ))}
      </div>
    );
  }
  
  Listing.propTypes = {
    items: PropTypes.array,
  };
  
  Listing.defaultProps = {
    items: [],
  };