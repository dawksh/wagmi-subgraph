import { BigInt } from "@graphprotocol/graph-ts";
import { Wagmi, AgreementAdded, Signed } from "../generated/Wagmi/Wagmi";
import { AgreementEntity } from "../generated/schema";

export function handleAgreementAdded(event: AgreementAdded): void {
	// Entities can be loaded from the store using a string ID; this ID
	// needs to be unique across all entities of the same type
	let entity = AgreementEntity.load(event.params.id.toString());

	// Entities only exist after they have been saved to the store;
	// `null` checks allow to create entities on demand
	if (!entity) {
		entity = new AgreementEntity(`${event.params.id}`);
		entity.agreement = event.params.agreement;
		entity.count = event.params.id;
		entity.signer = event.params.signer;
		entity.isSigned = false;
	}
}

export function handleSigned(event: Signed): void {
	let entity = AgreementEntity.load(event.params.id.toString());
	if (entity) {
		entity.isSigned = true;
	}
}
