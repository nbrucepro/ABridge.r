import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layout";
import CardDataStats from "../../components/CardDataStats";
import { Tab, Tabs } from "../../components/Tabs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Starter from "../../components/Starter";
import { fetchTodos } from "../../redux/features/todos.thunk";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state?.todoSlice?.todos);
  const [allTasks, setAllTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  useEffect(() => {
    if (Array.isArray(todos)) {
        classifyTasks();
    }
  }, [todos]);
  const classifyTasks = () => {
    const all = [...todos];
    const alLen = all.length - 20;
    const todo = all.slice(0, alLen);
    const inProgress = all.slice(alLen, alLen+6);
    const completed = all.slice(alLen+6);

    setAllTasks(all);
    setTodoTasks(todo);
    setInProgressTasks(inProgress);
    setCompletedTasks(completed);
  };



  return (
    <Layout>
      <Breadcrumb pageName={t("creative_Website")} />
      <h4 className="text-title-md font-bold text-black dark:text-white mb-12 sm:mb-6">
        {t("website_design")}
      </h4>
      <Starter />
      <Tabs>
        <Tab label={t("all_task")}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {allTasks.map((task) => (
              <CardDataStats
                key={task.id}
                title={task.todo}
                total={task.total}
                rate={task.rate}
                levelUp={task.levelUp}
              >
                {task.completed ? t("completed") : t("todo")}
              </CardDataStats>
            ))}
          </div>
        </Tab>
        <Tab label={t("todo")}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {todoTasks.map((task) => (
              <CardDataStats
                key={task.id}
                title={task.todo}
                total={task.total}
                rate={task.rate}
                levelUp={task.levelUp}
              >
                {t("todo")}
              </CardDataStats>
            ))}
          </div>
        </Tab>
        <Tab label={t("in_progress")}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {inProgressTasks.map((task) => (
              <CardDataStats
                key={task.id}
                title={task.todo}
                total={task.total}
                rate={task.rate}
                levelUp={task.levelUp}
              >
                {t("in_progress")}
              </CardDataStats>
            ))}
          </div>
        </Tab>
        <Tab label={t("completed")}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {completedTasks.map((task) => (
              <CardDataStats
                key={task.id}
                title={task.todo}
                total={task.total}
                rate={task.rate}
                levelUp={task.levelUp}
              >
                {t("completed")}
              </CardDataStats>
            ))}
          </div>
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
