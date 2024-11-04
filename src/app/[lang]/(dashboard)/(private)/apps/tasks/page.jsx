import TasksList from '../../../../../../views/apps/tasks/list/index'
import { getTasksData } from '../../../../../server/actions'
const TasksPage = async () => {
  const data2 = await getTasksData()
  console.log(data2)

  return (
    <>
      <TasksList taskData={data2}></TasksList>
    </>
  )
}

export default TasksPage
