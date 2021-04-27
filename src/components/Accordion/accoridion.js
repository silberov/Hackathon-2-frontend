import "./accordion.css";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  makeStyles,
  StylesProvider,
  withStyles,
} from "@material-ui/core/styles";

const getMaxType = (array) => {
  let max = 0;
  let array1 = [];
  array.forEach((array) => {
    if (array.type > max) {
      max = array.type;
    }
  });
  for (let i = 0; i <= max; i++) {
    array1[i] = i;
  }
  return array1;
};

const convertTypes = (tableName, typeNumber) => {
  if (tableName === "education") {
    switch (typeNumber) {
      case 0:
        return "degree";
      case 1:
        return "special knowledge";
    }
  }
  if (tableName === "experience") {
    switch (typeNumber) {
      case 0:
        return "client";
      case 1:
        return "industry";
      case 2:
        return "network";
    }
  }
  if (tableName === "skills") {
    switch (typeNumber) {
      case 0:
        return "software";
      case 1:
        return "languages";
      case 2:
        return "professional";
      case 3:
        return "softskills";
    }
  }

  if (tableName === "wishes") {
    switch (typeNumber) {
      case 0:
        return "projects";
      case 1:
        return "fields";
      case 2:
        return "further education";
    }
  }
};

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordionStyle: {
    display: "flex",
    alignItems: "center",
    msTransitionProperty: "color",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease",
    transitionDelay: "0s",
    fontSize: "1.5rem",
    paddingLeft: "1.5rem",
    height: "75px",
    border: "none",
    borderBox: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px solid lightgray",
  },
}));

const AccordionComponent = ({ employeeName, type, title, info }) => {
  const classes = useStyles();
  // let maxType = getMaxType(information);

  return (
    <div className="grid-rows">
      <div className={classes.root}>
        <h3>{employeeName}</h3>
        <br />
        <StylesProvider injectFirst>
          <div className="title">{type}</div>

          {/* {maxType.map((typeD) => { */}
            {/* return ( */}
            {title.map((data, index) => {
              return (
              <Accordion>
                <AccordionSummary
                  className={classes.accordionStyle}
                  expandIcon={
                    <img
                      src="https://uploads-ssl.webflow.com/5f183b01ba28173d5efc8550/5f183b024ccb09363cec9a1f_icon-chevron-right.svg"
                      alt=""
                      class="expandable-arrow"
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  }
                >
                  <div className="title-order">
                    <div className="description hover-class">
               
                      {data}
                    </div>
                    <div className="description-number hover-class">
                    </div>
                  </div>
                </AccordionSummary>

                <AccordionDetails>
                  <ul>
                    {info[index].map(info => {
                      return <li>{  }</li>
                    })}
                  </ul>
                </AccordionDetails> 

             </Accordion>
             );
        })}
        </StylesProvider>
      </div>
    </div>
  );
};

export default AccordionComponent;
