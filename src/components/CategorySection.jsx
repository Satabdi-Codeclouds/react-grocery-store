import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import useFetch from "../hooks/useFetch";

const CategorySection = () => {
  const [activeTab, setActiveTab] = useState('cake-milk');
  const { data: prodList, loading, error } = useFetch(`/assets/data/all-products.json`);
  const [tabs, setTabs] = useState([])
  const [paneData, setPaneData] = useState({})

  useEffect(() => {
    if (!loading && prodList?.categories?.length > 0) {
      const productsArr = [];
      const catTabsArr = []
      const productObj = {}
      prodList?.categories.forEach((category) => {
        catTabsArr.push({ id: category.id, label: category.name, count: category.products.length })
        productObj[category.id] = []
        productObj[category.id].push({
          productId: category.products[0]['id'],
          categoryId:category?.id,
          title: category.products[0]['name'],
          discount: category.products[0]['discount'],
          image: category.images[0]
        });
        productObj[category.id].push({
          productId: category.products[1]['id'],
          categoryId:category?.id,
          title: category.products[1]['name'],
          discount: category.products[1]['discount'],
          image: category.images[1]
        });
        productsArr.push(productObj)
      })
      console.log(productObj)
      setTabs(catTabsArr);
      setPaneData(productObj)
    }
  }, [prodList])


  const renderTabButton = (element, index) => (
    <li
      key={'catBtn-' + element.id}
      className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[992px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[26px] max-[1599px]:py-[20px] max-[1400px]:py-[18px] hover:text-[#64b496] cursor-pointer mb-[5px]"
      onClick={() => setActiveTab(element.id)}
    >
      <div className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]">
        {element.label}
        <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">({element.count} items)</span>
      </div>
    </li>
  );

  const renderPane = (id, products) => (
    
    <div className="tab-categories-pane" id={id} style={{ display: activeTab === id ? 'block' : 'none' }}>
      <div className="flex flex-wrap w-full mb-[-24px]">

        {products.map((product, idx) => (
          <div
            key={'cat-pane-' + idx}
            className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]"
          >
            <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[992px]:h-[400px] max-[576px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
              <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1400px]:text-[48px] max-[1200px]:text-[42px] max-[576px]:text-[34px]">
                  {product.discount}
                  <span className="py-[10px] pl-[5px]">
                    <small className="block text-[19px] font-normal text-[#fff] max-[1400px]:text-[17px] max-[1200px]:text-[14px] max-[576px]:text-[12px]">%</small>
                    <small className="block text-[19px] font-normal text-[#fff] max-[1400px]:text-[17px] max-[1200px]:text-[14px] max-[576px]:text-[12px]">Off</small>
                  </span>
                </h4>
              </div>
              <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                <div className="categories-text flex justify-center items-center">
                  <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[576px]:mb-[10px] max-[576px]:text-[18px]">
                    {product.title}
                  </h5>
                </div>
                <div className="categories-button flex justify-center items-center">
                  <Link
                    to={'/product-details/'+product?.productId+'?catId='+product?.categoryId}
                    className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                  >
                    shop now
                  </Link>
                </div>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="min-w-full h-full max-w-[max-content]"
              />
            </div>
          </div>
        ))}
      </div> 
    </div>
  );



  return (
    <section className="section-categories pb-[100px] max-[1200px]:pb-[70px] relative">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          <div className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
            <div className="cr-categories">
              <ul className="nav nav-tabs max-[992px]:mb-[-5px] flex flex-wrap justify-between mb-[-5px]" id="myCategoriesTab">

                {tabs.map(renderTabButton)}

              </ul>
            </div>
          </div>
          <div className="min-[992px]:w-[66.66%] w-full mb-[24px]">
            <div className="tab-content" id="myTabContent">
              {/* ["cake_milk", "meat", "Vegetables", "Custard", "Strawberry"] */}
              {Object.keys(paneData).map((element, index) => renderPane(element, paneData[element]))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
