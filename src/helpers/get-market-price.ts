import { Contract } from "@ethersproject/contracts";
import { Signer } from "@ethersproject/abstract-signer";
import * as providers from "@ethersproject/providers";
import { LpReserveContract } from "../abi";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(_networkID: Networks, provider: Signer | providers.Provider): Promise<number> {
    const mimTimeAddress = '0x4f658217f163509115b6e1fbba37cd9aefbdba12';
    const pairContract = new Contract(mimTimeAddress, LpReserveContract, provider);
    const reserves = await pairContract.getReserves();
    const marketPrice = reserves[1] / reserves[0];
    return marketPrice;
}
