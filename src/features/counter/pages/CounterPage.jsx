import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../counterSlice'

function CounterPage() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold text-forest-700">Redux Toolkit example</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">Counter</h1>
      <p className="my-8 text-6xl font-bold tabular-nums text-slate-900">{count}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={() => dispatch(decrement())} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">-1</button>
        <button onClick={() => dispatch(reset())} className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200">Reset</button>
        <button onClick={() => dispatch(increment())} className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-800">+1</button>
      </div>
      <p className="mt-6 text-sm text-slate-500">State ini disimpan di Redux store, bukan state lokal komponen.</p>
    </section>
  )
}

export default CounterPage
