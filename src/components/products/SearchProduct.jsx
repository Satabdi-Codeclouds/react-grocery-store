import react, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link,useLocation  } from 'react-router-dom';

const filterProducts = (catObj, query) => {
    const filteredProductsData = []
    catObj.products.forEach((prodObj, prodIndex) => {
        if (prodObj.name.toLowerCase().includes(query.toLowerCase())) {
            filteredProductsData.push({
                id: catObj.id,
                product: {
                    ...prodObj,
                    link: '/product-details/' + prodObj?.id + '?catId=' + catObj?.id
                }
            })
        }
    })
    return filteredProductsData;
}

const SearchProduct = () => {

    const { data: prodList, loading, error } = useFetch(`/assets/data/all-products.json`);
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation(); 

    useEffect(() => {
        if (prodList?.categories?.length > 0) {
            if (!query) {
                setFilteredProducts([]);
            } else {
                const filteredData = [];
                let catgorywiseFilteredProductData = []
                prodList.categories.forEach((catObj, catIndex) => {
                    if (selectedCategory === 'all') {
                        catgorywiseFilteredProductData = filterProducts(catObj, query)
                        if (catgorywiseFilteredProductData.length > 0) {
                            filteredData.push(...catgorywiseFilteredProductData)
                        }
                    } else {
                        if (catObj?.id === selectedCategory) {
                            catgorywiseFilteredProductData = filterProducts(catObj, query)
                            if (catgorywiseFilteredProductData.length > 0) {
                                filteredData.push(...catgorywiseFilteredProductData)
                            }
                        }
                    }

                })


                console.log(filteredData)
                setFilteredProducts(filteredData)
            }
        }


    }, [query])
   

    useEffect(() => {
        setQuery('');
    }, [location]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value); setQuery('')
    }

    return (<>
        <div className="font-Manrope cr-search relative max-[576px]:max-w-[350px] max-[576px]:m-auto">
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="search-input w-[600px] h-[45px] pl-[15px] pr-[175px] border-[1px] border-solid border-[#64b496] rounded-[5px] outline-[0] max-[1400px]:w-[400px] max-[992px]:max-w-[350px] max-[576px]:w-full max-[420px]:pr-[45px] "
                type="text" placeholder="Search For items..." />
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="form-select mr-[10px] w-[120px] h-[calc(100%-2px)] border-[0] tracking-[0] absolute top-[1px] pt-[0.375rem] pb-[0.375rem] pl-[0.5rem] outline-[0] right-[45px] text-[13px] border-l-[1px] border-solid border-[#64b496] rounded-[0] max-[420px]:hidden"
                aria-label="Default select example">
                <option value="all">All Categories</option>
                {prodList?.categories?.length > 0 ?
                    prodList.categories.map((catObj, index) => {
                        return <option key={index + '-' + catObj.id} value={catObj.id}>{catObj.name}</option>
                    })
                    : ''}
            </select>
            <a href="javascript:void(0)"
                className="search-btn w-[45px] bg-[#64b496] absolute right-[0] top-[0] bottom-[0] rounded-r-[5px] flex items-center justify-center">
                <i className="ri-search-line text-[14px] text-[#fff]"></i>
            </a>
            {filteredProducts?.length > 0 ?
                <ul className='absolute bg-[#fff] w-full border-[1px] border-[solid] border-[#ccc] rounded-[5px] max-h-[300px] overflow-y-auto p-[10px]'>
                    {
                        filteredProducts.map((productItem) => {
                            return <li className='p-[15px] border-b-[1px_solid_#ccc]'>
                                <Link to={productItem.product.link}>{productItem.product.name}</Link></li>
                        })
                    }
                </ul> : ''
            }
        </div>
    </>)
}

export default SearchProduct;