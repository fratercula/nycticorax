type SetDifference<A, B> = A extends B ? never : A
type SetComplement<A, A1 extends A> = SetDifference<A, A1>

export type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>
