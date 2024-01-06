import "../../styles/Appointments.Patient.css";
import { StyledTab, StyledTabs } from "../../components/Tabs";
import Table from "../../components/Table";
import useAppointments from "../../hooks/useAppointments";

const Appointments = () => {
  const { index, setIndex, columns, rows } = useAppointments();

  return (
    <div className="patient-appointments-page">
      <div className="patient-appointments-calendar">
        <div>No scheduled appointments</div>
      </div>
      <div className="patient-appointments-tabs">
        <div>
          <StyledTabs value={index} onChange={setIndex} aria-label="tabs">
            <StyledTab label="Requests" />
            <StyledTab label="Active" />
            <StyledTab label="History" />
          </StyledTabs>
        </div>
        <div>
          <Table columns={columns} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
