import { NFTCard } from "components/card/NftCard";
 
function Example() {
  return (
    <NFTCard
      title="ETH AI Brain"
      author="Nick Wilson"
      bidders={["/img/avatar2.png", "/img/avatar3.png", "/img/avatar4.png"]}
      image="/img/Nft1.png"
      currentBid="0.91 ETH"
      download="#"
      extra="max-w-[370px]"
    />
  );
}