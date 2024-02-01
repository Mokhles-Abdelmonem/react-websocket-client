import OneButton from './one_button';

export default function getReports(websocket) {

  const body = {
    event: "reports",
    method: "list",
    kwargs: {},
    body:{}
  }
  
    return (
  
      <OneButton
      text="Get Reports"
      body={body}
      websocket={websocket}
      />
  
    );

  }
