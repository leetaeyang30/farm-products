import React, { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleLevel, TitleSize } from "/src/components/ui/title/title";
import {
  Order,
  Wrapper,
  LeftColumn,
  PriceLabel,
  PriceValue,
  AddressInput,
  ProductSwiper,
  CheckboxLabel
} from "./styled";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import Button from "/src/components/ui/button/button";
import Product from "/src/components/ui/product/product";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function OrderPage({ products }) {
  const [addressValue, setAddressValue] = useState("");
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleOrder = () => {
    alert(
      `Спасибо за покупку. Ваш заказ на сумму ${fullPrice} рублей будет доставлен по адресу: ${addressValue}`
    );
  };

  return (
    <>
      <Order>
        {products && products.length ? (
          <Wrapper as="form">
            <LeftColumn>
              <Panel marginBottom={18}>
                <Title
                  size={TitleSize.EXTRA_SMALL}
                  level={TitleLevel.H2}
                  marginBottom={12}
                >
                  Выберите продукты
                </Title>
                <CheckboxList
                  isGridList={false}
                  selectValues={selectProductIds}
                  labelComponent={CheckboxLabel}
                  options={products.map((product) => ({
                    value: product.id,
                    title: product.title
                  }))}
                  name={"select-products"}
                  onChange={setSelectProductIds}
                  onClickLabel={handleOnClickProduct}
                />
              </Panel>
              <Panel>
                <Title
                  size={TitleSize.EXTRA_SMALL}
                  level={TitleLevel.H2}
                  marginBottom={24}
                >
                  Сделать заказ
                </Title>
                <AddressInput
                  type="text"
                  placeholder="Введите адрес доставки"
                  value={addressValue}
                  onChange={(evt) => setAddressValue(evt.target.value)}
                />
                <PriceLabel as="span">Цена</PriceLabel>
                <PriceValue value={fullPrice} />
                <Button
                  maxWidth
                  onClick={handleOrder}
                  disabled={!(selectProductIds?.length && addressValue)}
                >
                  Купить
                </Button>
              </Panel>
            </LeftColumn>
            <ProductSwiper
              spaceBetween={12}
              direction="vertical"
              slidesPerView="auto"
              scrollbar={{ draggable: true }}
              mousewheel={true}
              pagination={{
                type: "fanction"
              }}
              onSwiper={setSwiperRef}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product product={product} />
                </SwiperSlide>
              ))}
            </ProductSwiper>
          </Wrapper>
        ) : (
          "Продукты были слишком вкусные и их разобрали."
        )}
      </Order>
    </>
  );
}

export default OrderPage;
