import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <div className="empty">
          <h2>Checkout page !!</h2>
          <Link to="/products" className="btn">
            Go back to products page
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
