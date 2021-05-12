import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Wrapper,
  CurrentLessonBlock,
  ProgressNotification,
  LessonTitle,
  LessonTLDR,
  AllLessons,
  LessonCard,
  LessonPictureBlock,
  LessonDescriptionBlock,
  LessonCardTitle,
  LessonLink,
  LessonTag,
} from './styles'
import WithTopBar from '../../utils/HOCs/screenWrapper'
import { SubmitButton } from '../../ui/commonUI'
import { tasksArray } from './Course/data'

const Courses = () => {
  const courseNames = Object.entries(tasksArray).map((el) => el[1].fullName)
  console.log(courseNames[0], tasksArray.find((el) => el.fullName === courseNames[0])?.tasks)
  return (
    <Wrapper>
      <CurrentLessonBlock>
        <ProgressNotification>Вы остановились: Урок 3 из 3</ProgressNotification>
        <LessonTitle>Тема урока</LessonTitle>
        <LessonTLDR>
          Мой президент ебашит вообще адовую экономику. Ну такой вот примерно рецепт усредненный,
          потому что вариаций масса. Берется «нефть», она не перерабатывается, перерабатывать - это
          не про моего президента. Он берет эту массу , вываливает ее на запад и начинает продавать.
          Добавляет в него огромное количество газа, алюминия, алмаза, металла черного и цветного
          НИКЕЛЯ! для большего гешефта, угля сверху. Все это отправляется по трубам. Потом снимается
          лавэ и отправляется в ЗВР и бюджет. Потом президент заносит и щедро отдав часть олигархам
          начинает выводить в офшоры. При этом выводит с бюджета шкрябая по нему ручкой. Переводит и
          приговаривает полушепотом ух бля. При этом у него на лбу аж пот выступает. Любезно мне
          иногда предлагает, но я отказываюсь. Надо ли говорить о том какой дичайшая инфляция от
          санкций потом? Рубль падает так, что ЦБ отклеивается.
        </LessonTLDR>
        <SubmitButton btnwidth={194}>Продолжить занятие</SubmitButton>
      </CurrentLessonBlock>
      <LessonTitle>Все уроки темы</LessonTitle>
      <AllLessons>
        {tasksArray
          .find((el) => el.fullName === courseNames[0])
          ?.tasks.map((task) => {
            return (
              <LessonCard key={task.id}>
                <LessonPictureBlock>
                  <LessonTag>{task.title.replaceAll(/[\d.]/gm, '')}</LessonTag>
                </LessonPictureBlock>
                <LessonDescriptionBlock>
                  <LessonCardTitle>{task.title}</LessonCardTitle>
                  <LessonTLDR>{task.fullTitle}</LessonTLDR>
                </LessonDescriptionBlock>
                <LessonLink to={`/courses/jscore/${task.id}`}>Начать урок</LessonLink>
              </LessonCard>
            )
          })}
      </AllLessons>
      {/* <div>
        <Link to={'/courses/jscore'}>JS Core</Link>
        <Link to={'/jsadv'}>JS Advanced</Link>
        <Link to={'/reactcore'}>React JS Core</Link>
        <Link to={'/reactadv'}>React JS Adv</Link>
      </div> */}
    </Wrapper>
  )
}

export default WithTopBar(Courses, 'full')

// export default Courses
