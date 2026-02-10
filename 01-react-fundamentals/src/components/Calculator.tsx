// # Derive types

// const user = { name: 'Kody', isCure: true }
// type User = typeof user
// type User = {
//   name: string
//   isCure: boolean
// }

// type UserKeys = keyof User
// type UserKeys = 'name' | 'isCure'

type OperationFn = (left: number, right: number) => number
const operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
  '**': (left, right) => left ** right,
  '%': (left, right) => left % right,
} satisfies Record<string, OperationFn>

// type Operations = typeof operations
// +
// type Operator = keyof Operations
// =
// operator: keyof typeof operations

type CalculatorProps = {
  left?: number
  operator?: keyof typeof operations
  right?: number
}

export default function Calculator({
  left = 0,
  operator = '+',
  right = 0,
}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <>
      <h1>
        {left} {operator} {right} = {result}
      </h1>
    </>
  )
}
