import React from "react";

import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
  DragAndDrop,
  Resize,
  ResourcesDirective,
  ResourceDirective,
} from "@syncfusion/ej2-react-schedule";

import { L10n, loadCldr } from "@syncfusion/ej2-base";

loadCldr(
  require("cldr-data/supplemental/numberingSystems.json"),
  require("cldr-data/main/pt/ca-gregorian.json"),
  require("cldr-data/main/pt/numbers.json"),
  require("cldr-data/main/pt/timeZoneNames.json"),
  require("cldr-data/main/pt/numbers.json"),
  require("cldr-data/main/pt/ca-buddhist.json"),
  require("cldr-data/main/pt/dateFields.json")
);

L10n.load({
  pt: {
    schedule: {
      addTitle: "Novo Título",
      saveButton: "Salvar",
      cancelButton: "Fechar",
      deleteButton: "Deletar",
      moreDetails: "Mais detalhes",
      save: "Salvar",
      allDay: "O dia todo",
      timezone: "Fuso Horário",
      newEvent: "Novo Evento",
      editEvent: "Editar Evento",
      today: "Hoje",
      todayCalendar: "Hoje",
      delete: "Deletar",
      cancel: "Cancelar",
      day: "Dia",
      week: "Semana",
      month: "Mês",
      deleteMultipleEvent: "Deletar Multiplos Eventos",
      deleteMultipleContent: "Você tem certeza que quer deletar os eventos selecionados?",
      deleteEvent: "Deletar Evento",
      deleteContent: "Você tem certeza que quer deletar este evento?",
      alert: "Alerta",
      invalidDateError: "A data inserida é inválida.",
      edit: "Editar",
      close: "Fechar",
      previous: "Anterior",
      next: "Próximo",
    },
    recurrenceeditor: {
      repeat: "Repetição",
    },
    calendar: {
      today: "Hoje",
    },
  },
});

function Calendar() {
  const data = [
    {
      Id: 1,
      Subject: "Reunião - 1",
      StartTime: new Date(2022, 8, 15, 10, 0),
      EndTime: new Date(2022, 8, 15, 12, 30),
      IsAllDay: false,
    },
    {
      Id: 2,
      Subject: "Meeting",
      StartTime: new Date(2022, 8, 20, 10, 0),
      EndTime: new Date(2022, 8, 20, 12, 30),
      IsAllDay: false,
      Status: "Completed",
      Priority: "High",
    },
  ];

  const ownerData = [
    { OwnerText: "Pista 1", Id: 1, OwnerColor: "#ffaa00" },
    { OwnerText: "Pista 2", Id: 2, OwnerColor: "#f8a398" },
    { OwnerText: "Pista 3", Id: 3, OwnerColor: "#7499e1" },
  ];

  return (
    <ScheduleComponent
      locale="pt"
      currentView="Day"
      eventSettings={{
        dataSource: data,
        fields: {
          editEvent: { name: "EditEvent", title: "Editar Evento" },
          id: "Id",
          subject: { name: "Subject", validation: { required: true }, title: "Nome do evento" },
          location: { name: "Location", validation: { required: true }, title: "Localização do Evento" },
          startTime: { name: "StartTime", validation: { required: true }, title: "Hora de início" },
          endTime: { name: "EndTime", validation: { required: true }, title: "Hora de fim" },
          isAllDay: { name: "IsAllDay", title: "Evento o dia inteiro" },
          timezone: { name: "Timezone", title: "Fuso Horário" },
          description: { name: "Description", title: "Descrição do Evento" },
          startTimezone: { name: "StartTimezone", title: "Fuso Horário de início" },
          endTimezone: { name: "EndTimezone", title: "Fuso Horário de fim" },
        },
      }}
      showQuickInfo={true}
      group={{ resources: ["Owners"] }}
    >
      <ResourcesDirective>
        <ResourceDirective
          field="OwnerId"
          title="Pistas"
          name="Owners"
          allowMultiple={false}
          dataSource={ownerData}
          textField="OwnerText"
          idField="Id"
          allowGroupEdit={false}
          colorField="OwnerColor"
        />
      </ResourcesDirective>
      <ViewsDirective>
        <ViewDirective option="Day" />
        <ViewDirective option="Week" />
        <ViewDirective option="Month" />
      </ViewsDirective>
      <Inject services={[Day, Week, Month, Resize, DragAndDrop]} />
    </ScheduleComponent>
  );
}

export default Calendar;
