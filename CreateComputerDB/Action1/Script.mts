SystemUtil.Run "C:\Program Files\Internet Explorer\iexplore.exe","http://computer-database.herokuapp.com/computers"
On error resume next
LinkCheck = Browser("Browser").Page("Computers database").Link("Play sample application").Exist(5)

If err.number<> 0  Then
	
Reporter.ReportEvent micFail,Step1, "Page did not load proeperly"

Else
wait(2)
Browser("Browser").Page("Computers database").Link("Add a new computer").Click
Browser("Browser").Page("Computers database_2").WebEdit("name").Set datatable("ComputerName","CreatePositiveScenario") @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("name")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Computers database_2").WebEdit("introduced").Set datatable("IntroducedDate","CreatePositiveScenario") @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("introduced")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Computers database_2").WebEdit("discontinued").Set datatable("DiscontinuedDate","CreatePositiveScenario") @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("discontinued")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Computers database_2").WebList("company").Select datatable("Company","CreatePositiveScenario") @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebList("company")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("Computers database_2").WebButton("Create this computer").Click

	If Browser("Browser").Page("Computers database").WebElement("Done! Computer").Exist = True Then
	
	Reporter.ReportEvent micpass,datatable("testCaseID","CreatePositiveScenario"), "Computer has been succesfully created"
	Else
	
    Reporter.ReportEvent micfail,datatable("testCaseID","CreatePositiveScenario"), "Computer can not be succesfully created"
	End if

End if
Browser("Browser").Close 
wait(2)
