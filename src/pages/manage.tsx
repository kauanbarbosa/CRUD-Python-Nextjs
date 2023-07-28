import Title from '@/components/Title'
import Board from '@/components/Panel'
import 'font-awesome/css/font-awesome.min.css'
import Manage from '@/components/Manage'

export default function manageEmployees() {
    return (
        <main className={`flex 
          flex-col
          justify-between
          items-center`}
        >
            <Title title="Manage Employees"></Title>
            <Board href="/employees">
                <Manage></Manage>
            </Board>
        </main>
    )
}
