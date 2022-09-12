// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AgreementEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AgreementEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AgreementEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AgreementEntity", id.toString(), this);
    }
  }

  static load(id: string): AgreementEntity | null {
    return changetype<AgreementEntity | null>(store.get("AgreementEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get agreement(): string {
    let value = this.get("agreement");
    return value!.toString();
  }

  set agreement(value: string) {
    this.set("agreement", Value.fromString(value));
  }

  get signer(): Bytes {
    let value = this.get("signer");
    return value!.toBytes();
  }

  set signer(value: Bytes) {
    this.set("signer", Value.fromBytes(value));
  }

  get isSigned(): boolean {
    let value = this.get("isSigned");
    return value!.toBoolean();
  }

  set isSigned(value: boolean) {
    this.set("isSigned", Value.fromBoolean(value));
  }
}
