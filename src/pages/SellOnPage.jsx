import React from 'react';
import CategoriesBar from '../components/CategoriesBar';
import ImagesSection from '../components/ImagesSection'; // ✅ Correct name here
import FAQAccordion from '../components/FAQAccordion';

const SellOnPage = () => {
  return (
    <>
      <CategoriesBar />
      <ImagesSection />
      <FAQAccordion />
    </>
  );
};

export default SellOnPage;
