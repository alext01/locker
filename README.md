# Locker Tracker System
 
 The purpose of this program is to allow administrative staff to track the occupancy of the lockers in the
 school. This system will keep track of the lock combination on occupied lockers, whether a locker is
 unused, or if the locker have been flagged for the lock to be cut.

 The information will be stored on a database server and accessed through a graphical interface. The
 interface will allow a user to search for lockers with different occupancy status, search by hallway and
 locker number, display a list of all the lockers and their information. As well the user will be able to
 delete, add, and update locker information through the interface.

 The locker data will be stored in the database on a single table. It will have a Composite Key of two
 columns. The locker number and the hallway. I will also have additional columns of Combination and Status.

 For the database, I am looking at using PostgreSQL database as it is open source. As for the backend of
 the project, I am looking to using Processing from processing.org.
 
 ### Potential Problems
 There are some issues or problems that we may run into. One problem that may occur is if the software
 is unable to connect to the database. Another issue that we would have to handle is if there are more
 than one user trying to edit the same locker at the same time. The chances of this happening is very low
 but it is a problem that we have to watch out for none the less. The final problem we may have to take 
 care of is if the database automatically backs itself up at set time intervals and where to store the
 backups.
