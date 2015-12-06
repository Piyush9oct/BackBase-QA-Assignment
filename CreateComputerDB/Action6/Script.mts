SystemUtil.Run "C:\Program Files\Internet Explorer\iexplore.exe","http://computer-database.herokuapp.com/computers"
On error resume next
LinkCheck = Browser("Computers database").Page("Computers database").Link("Play sample application").Exist(5)

If err.number<> 0  Then
Reporter.ReportEvent micFail,Step1, "Page did not load proeperly"

Else

wait(2)
Browser("Computers database").Page("Computers database").WebTable("Computer name").ChildItem(2,1,"Link",0).Click
wait(1)
Browser("Computers database").Page("Computers database_2").WebButton("Delete this computer").Click
wait(1)
	If Browser("Computers database").Page("Computers database").WebElement("Done! Computer has been").Exist = True Then
	
	     Reporter.ReportEvent micpass,"ComDb_Delete_01", "Computer has been succesfully deleted."
	Else
		
        Reporter.ReportEvent micfail,"ComDb_Delete_01", "Computer is not succesfully deleted"
	End if

End if

Browser("Computers database").Close 

