import "./accordion.css";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  makeStyles,
  StylesProvider,
  withStyles,
} from "@material-ui/core/styles";

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

const AccordionComponent = ({ information }) => {
  const classes = useStyles();
  return (
    information.length > 0 && (
      <div className="grid-rows">
        {information.map((data, index) => {
          return (
            <div className={classes.root}>
              <StylesProvider injectFirst>
                <div className="title">Title</div>

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
                      <div className="description hover-class">description</div>
                      <div className="description-number hover-class">2</div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                  </AccordionDetails>
                </Accordion>
              </StylesProvider>
            </div>
          );
        })}
      </div>
    )
  );
};

export default AccordionComponent;
