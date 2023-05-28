const hopeAddress = "0x317c116c90ca9fF469250D0EB563A6DC460D056f";
const hopeAbi = ()=>{
        return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"controllerType","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"controllerSlot","type":"bytes32"},{"indexed":true,"internalType":"address","name":"controller","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AdminSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"getPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"type_","type":"string"},{"internalType":"address","name":"controller","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"losePoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"type_","type":"string"},{"internalType":"address","name":"controller","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;

}
;

const hopeshopeAddress = "0x706E4a0a252a7227cf9C2f878C2F002182B1D868";
const hopeshopeAbi = ()=>{
        return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"controllerType","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"controllerSlot","type":"bytes32"},{"indexed":true,"internalType":"address","name":"controller","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AdminSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to_","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"totalClaimed_","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"ERC721NTP","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC721ROARS","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Point","outputs":[{"internalType":"contract IPoint","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIdsNTP","type":"uint256[]"},{"internalType":"uint256[]","name":"tokenIdsROARS","type":"uint256[]"}],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"}],"name":"claimByCollection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getPendingPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"}],"name":"getPendingPointsMany","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"type_","type":"string"},{"internalType":"address","name":"controller","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"type_","type":"string"},{"internalType":"address","name":"controller","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setERC721NTP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setERC721ROARS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"yieldEndTime_","type":"uint256"}],"name":"setYieldEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"yieldRatePerPointNTP_","type":"uint256"}],"name":"setYieldRatePerPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"yieldRatePerPointROARS_","type":"uint256"}],"name":"setYieldRatePerPointROARS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToLastClaimedTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yieldRatePerPointNTP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yieldRatePerPointROARS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yieldStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;

}
;

const ntpAddress = "0xd6af46AD1B94a3AD48b8091da8014ce9937De727";
const ntpAbi = ()=>{
        return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner_","type":"address"},{"indexed":true,"internalType":"address","name":"spender_","type":"address"},{"indexed":true,"internalType":"uint256","name":"id_","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"approved_","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from_","type":"address"},{"indexed":true,"internalType":"address","name":"to_","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_balanceData","outputs":[{"internalType":"uint32","name":"balance","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenData","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI_EXT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadata","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURIEXT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setUseMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"id_","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"useMetadata","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;

}
;

const roarsAddress = "0xECb49Ccc2929C18c28929bf9aA85b45c92AB0050";
const roarsAbi = ()=>{
        return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner_","type":"address"},{"indexed":true,"internalType":"address","name":"spender_","type":"address"},{"indexed":true,"internalType":"uint256","name":"id_","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"approved_","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from_","type":"address"},{"indexed":true,"internalType":"address","name":"to_","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_balanceData","outputs":[{"internalType":"uint32","name":"balance","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenData","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI_EXT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadata","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURIEXT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setUseMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"id_","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"useMetadata","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
}
;

const walletOfOwnerAddress = "0x5a0546Dff74C1D21C75B6b868c50E1090229Ffdb";
const walletOfOwnerAbi = ()=>{
    return `[{"inputs":[],"name":"ERC721","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"user_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]`;
}
;

const correctChain = 5;

if (window.ethereum == undefined) {
    window.alert('Use a web3 enabled browser');
}

const startID = 1;
/// collection start ID
const maxSupply = 2222;
/// collection end ID

const startIDr = 1;
/// collection start ID
const maxSupplyr = 12345;
/// collection end ID

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const hope = new ethers.Contract(hopeAddress,hopeAbi(),signer);
const hopeshop = new ethers.Contract(hopeshopeAddress,hopeshopeAbi(),signer);

const ntpcontract = new ethers.Contract(ntpAddress,ntpAbi(),signer);
const roarscontract = new ethers.Contract(roarsAddress,roarsAbi(),signer);
const woocontract = new ethers.Contract(walletOfOwnerAddress,walletOfOwnerAbi(),signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
}
;

const getAddress = async()=>{
    return await signer.getAddress()
}
;

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
}
;

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
}
;

const getChainId = async()=>{
    return await signer.getChainId()
}
;

//website output
const getPunksNumber = async()=>{
    let userAddress = await getAddress();
    let totalMutantSumo = await ntpcontract.balanceOf(userAddress);
    return totalMutantSumo;
}
;

const getRoarsNumber = async()=>{
    let userAddress = await getAddress();
    let totalMutantSumo = await roarscontract.balanceOf(userAddress);
    return totalMutantSumo;
}
;

const getHopeBalance = async()=>{
    const userAddres = await getAddress();
    let balance = Number((await hope.balanceOf(userAddres)));
    $("#hope-balance").html(`${Number(balance)}`);
}
;

const getPendingHopeBalance = async()=>{
    let userAddress = await getAddress();
    let b = await woocontract.walletOfOwner(ntpAddress, userAddress, 1, 33);
    const pendinghope = await hopeshop.getPendingPointsMany(ntpAddress, b);
    //$("#claimable-hope").text(`${Number(pendinghope).toFixed(2)}`);
    $("#claimable-hope").text(`${Number(pendinghope)}`);
}
;

const getPendingPoints = async(contractAddress, tokenId)=>{
    let userAddress = await getAddress();
    const pendingPoints = await hopeshop.getPendingPoints(contractAddress, tokenId);
    return pendingPoints;
}

//website output

//claim section
const claimHope = async()=>{
    let userAddress = await getAddress();
    const id_1 = $("#amountHOPE").val();
    const add_to_transfer = $("#add-to-transfer").text();
    if (await hopeshop.balanceOf(userAddres) <= id_1) {
        await window.alert('You do not have enough HOPE to transfer input amount!')
    } else {
        await hopeshop.claim(await woocontract.walletOfOwner(ntpAddress, userAddress, 1, 33)).then(async(tx_)=>{
            await waitForTransaction(tx_);
        }
        );
    }
}
;

//transfer section

const transferHope = async()=>{
    const userAddress = await getAddress();
    const id_1 = parseInt($("#amountHOPE").val());
    const add_to_transfer = $("#add-to-transfer").val();
    if (await hope.balanceOf(userAddress) < id_1) {
        await window.alert('You do not have enough HOPE to transfer input amount!')
    } else {
        await hope.transferFrom(userAddress, add_to_transfer, id_1).then(async(tx_)=>{
            await waitForTransaction(tx_);
        }
        );
    }
}
;

/*
document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('#name');
    const images = document.querySelectorAll('.image-4');
    const baseUrl = 'https://ipfs.io/ipfs/QmTDtXxXbeqGTsjtiJumoZYFyjZSXdJUe73Dzzw9E4c31L/';
    let imageIndex = 0;

    function changeImages(imageId) {
      if (imageId) {
        console.log('Changing images to:', imageId);
        const cacheBuster = Date.now();
        images.forEach((image) => {
          const newSrc = `${baseUrl}${imageId}.png?${cacheBuster}`;
          image.setAttribute('src', newSrc);
          console.log(`Image URL: ${newSrc}`);
        });
      } else {
        console.log('No valid image ID provided.');
      }
    }

    function processInput() {
      const input = inputField.value.trim();
      if (input) {
        const imageIds = input.split(' ');
        console.log('Input received:', input, 'Image IDs:', imageIds);
        changeImages(imageIds[imageIndex]);
      }
    }

    inputField.addEventListener('input', processInput);

    setInterval(() => {
      if (inputField.value.trim()) {
        const imageIds = inputField.value.trim().split(' ');
        console.log('image index:', imageIndex);
        changeImages(imageIds[imageIndex]);
        imageIndex++;
        if (imageIndex >= imageIds.length) {
          imageIndex = 0;
        }
      }
    }, 3000);
});*/

// NTP functionality
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const inputField = document.querySelector('#NFT-token-ID');
        const imageElement = document.querySelector('.image-4');
        const baseUrl = 'https://ipfs.io/ipfs/QmTDtXxXbeqGTsjtiJumoZYFyjZSXdJUe73Dzzw9E4c31L/';
        const claimableHopeElement = document.querySelector('#claimable-hope');

    function changeImage(imageId) {
        if (imageId >= 1 && imageId <= 50) {
            // check if the id is within the range
            console.log('Changing image to:', imageId);
            const newSrc = `${baseUrl}${imageId}.png`;
            imageElement.setAttribute('src', newSrc);
            console.log(`Image URL: ${newSrc}`);
            claimableHopeElement.innerHTML = "...";
            // reset the claimable hope amount
        } else {
            console.log('Invalid token ID');
            claimableHopeElement.innerHTML = 'Invalid token ID';
        }
    }

    function processInput() {
        const input = inputField.value.trim();
        if (input === '') {
            claimableHopeElement.innerHTML = "";
            return;
        }
    
        const parsedInput = parseInt(input);
        if (!isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= 12222) {
            console.log('Input received:', parsedInput);
            changeImage(parsedInput);
            getPendingPoints(ntpAddress, parsedInput).then(pendingPoints => {
                claimableHopeElement.innerHTML = pendingPoints.toString();
            }).catch(err => {
                console.error('Error getting pending points:', err);
                claimableHopeElement.innerHTML = 'Try connecting your wallet';
            });
        } else {
            console.log('Invalid token ID');
            claimableHopeElement.innerHTML = 'Invalid token ID';
        }
    }
    
    
    inputField.addEventListener('input', processInput);
    });
})();

// ROARS functionality
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const inputField = document.querySelector('#ROARS-token-ID');
        const imageElement = document.querySelector('#roars-image');
        const baseUrl = 'https://gateway.pinata.cloud/ipfs/QmRy3gpiwuTECFnVbSZp172cznjAvwYzxLBxwdWQDHGQyY/';
        const claimableHopeElement = document.querySelector('#claimable-hope-roars');

    function changeImage(imageId) {
        if (imageId >= 1 && imageId <= 50) {
            console.log('Changing image to:', imageId);
            const newSrc = `${baseUrl}${imageId}.png`;
            imageElement.setAttribute('src', newSrc);
            console.log(`Image URL: ${newSrc}`);
            claimableHopeElement.innerHTML = "...";
        } else {
            console.log('Invalid token ID');
            claimableHopeElement.innerHTML = 'Invalid token ID';
        }
    }

    function processInput() {
        const input = inputField.value.trim();
        if (input === '') {
            claimableHopeElement.innerHTML = "";
            return;
        }
    
        const parsedInput = parseInt(input);
        if (!isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= 12345) {
            console.log('Input received:', parsedInput);
            changeImage(parsedInput);
            getPendingPoints(roarsAddress, parsedInput).then(pendingPoints => {
                claimableHopeElement.innerHTML = pendingPoints.toString();
            }).catch(err => {
                console.error('Error getting pending points:', err);
                claimableHopeElement.innerHTML = 'Try connecting your wallet';
            });
        } else {
            console.log('Invalid token ID');
            claimableHopeElement.innerHTML = 'Invalid token ID';
        }
    }
    
    
    inputField.addEventListener('input', processInput);
});
})();




const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        $("#your-hope").text(`${await getHopeBalance()}`);
        await getPendingHopeBalance();
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-yeti-images").empty();
        $("#available-yeti-images").text("Error: Wrong Network");
        $("#your-hope").html(`0.0 <img src="./images/$CHANKO.png">`);
        $("#claimable-hope").html(`0.0`);
        window.alert("Error: Wrong Network", false);
    }
}
;

const updateCurrentChain = async()=>{
    if ((await getChainId()) !== correctChain) {
        window.alert("Error: Wrong Network!", false);
    } else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}
;

// Processing tx returns
const waitForTransaction = async(tx_)=>{
    startLoading(tx_);
    provider.once(tx_.hash, async(transaction_)=>{
        await endLoading(tx_, transaction_.status);
    }
    );
}
;

const updateInfo = async()=>{
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0, 9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0, 9)}...`);
    $("#ownedpunks").text(`${parseInt(await ntpcontract.balanceOf(userAddress))}`)
    $("#ownedroars").text(`${parseInt(await roarscontract.balanceOf(userAddress))}`)
}
;

setInterval(async()=>{
    await updateInfo();
    await getHopeBalance();
    //await getHopeBalanceByID();
    await getPendingHopeBalance();
}
, 5000)

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
}
);

window.onload = async()=>{
    await updateInfo();
    await getHopeBalance();
    //await getHopeBalanceByID();
    await updateClaimingInfo();
}
;

window.onunload = async()=>{}
