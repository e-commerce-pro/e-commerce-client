import React, { useEffect } from 'react';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import Loader from 'components/common/loader/Loader';
import WishlistMain from 'components/wishlist/WishlistMain';
import { getUserWishList, removeProductToWishList } from 'redux/auth/actions';

const Wishlist = ({
  keyword,
  loading,
  wishlist,
  getWishList,
  removeFromWishList,
}) => {
  useEffect(() => {
    getWishList();
  }, [getWishList]);

  return (
    <div
      style={{
        height: 'calc(100vh - 115px)',
        overflow: 'auto',
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <WishlistMain
          wishlist={wishlist}
          keyword={keyword}
          removeFromWishList={removeFromWishList}
        />
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { keyword, loading, wishlist } = user;

  return { keyword, loading, wishlist };
};
const mapDispatchToProps = (dispatch) => ({
  getWishList: () => dispatch(getUserWishList()),
  removeFromWishList: (_id) => dispatch(removeProductToWishList(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);