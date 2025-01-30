import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  title: string;
  details: string;
  expanded: boolean;
}

export default function CustomAccordeon(props: Props) {
  return (
    <div className=''>
      <Accordion defaultExpanded={props.expanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
