import { useState } from "react"

export default function Tabs({productDetails}) {
    const tabItems = [
        {
            id: "description",
            label: "Description"
        },
        {
            id: "additional-info",
            label: "Information"
        }
    ];
    console.log(productDetails)
    const [activeTab, setActiveTab] = useState(tabItems[0]?.id);
    return (<>
        <ul className="nav nav-tabs border-b-[1px] border-solid border-[#dee2e6] flex flex-wrap justify-left" id="mydeliveryTab">
            {tabItems.map((tabItem, tabItemIndex) => {

                return <li
                    key={"tabItem-" + tabItemIndex}
                    onClick={(e)=>setActiveTab(tabItem.id)}
                    className={`nav-item transition-all duration-[0.3s] ease-in-out mr-[30px] relative  cursor-pointer ${activeTab === tabItem.id ? "active" : ""}`}>
                    <a

                        className="mb-[25px] flex font-Poppins text-[17px] font-semibold leading-[1.5] tracking-[0] text-[#2b2b2d] text-left max-[1400px]:text-[18px] max-[768px]:text-[16px] max-[576px]:mb-[15px]">{tabItem.label}</a>
                </li>

            })}
        </ul>
        <div className="tab-content" id="myTabContent">
            {activeTab === 'description' &&
                <div className="tab-delivery-pane" id="description">
                    <div className="cr-tab-content">
                        <div className="cr-description pt-[30px]">
                            <p className="text-[14px] text-left mb-[0] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                                dignissimos consectetur quae in perferendis
                                doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                        </div>
                        <h4 className="heading mb-[0] pt-[30px] pb-[20px] font-Poppins text-[16px] font-medium leading-[1.5] text-left text-[#2b2b2d] border-b-[1px] border-solid border-[#e9e9e9]">Packaging &amp; Delivery</h4>
                        <div className="cr-description pt-[30px]">
                            <p className="text-[14px] text-left mb-[0] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                        </div>
                    </div>
                </div>
            }
            {activeTab === 'additional-info' &&
                <div className="tab-delivery-pane" id="additional">
                    <div className="cr-tab-content">
                        <div className="cr-description pt-[30px]">
                            <p className="text-[14px] text-left mb-[0] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                        </div>
                        <div className="list">
                            <ul className="mt-[30px] mb-[-5px] p-[0]">
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Brand <span>:</span></label>ESTA BETTERU CO</li>
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Flavour <span>:</span></label>Super Saver Pack</li>
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Diet Type <span>:</span></label>Vegetarian</li>
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Weight <span>:</span></label>200 Grams</li>
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Info <span>:</span></label>Egg Free, Allergen-Free</li>
                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Items <span>:</span></label>1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>)
}