SystemUtil.Run "C:\Program Files\Internet Explorer\iexplore.exe","http://computer-database.herokuapp.com/computers"
On error resume next
Browser("Computers database").Page("Computers database").Link("Play sample application").Click
If err.number<> 0  Then
	
Reporter.ReportEvent micFail,Step1, "Page did not load proeperly"

Else

Browser("Computers database").Page("Computers database").Link("Add a new computer").Click
Browser("Computers database").Page("Computers database").WebEdit("name").Set "" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("name")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Computers database").Page("Computers database").WebEdit("introduced").Set "2015-02-13" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("introduced")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Computers database").Page("Computers database").WebEdit("discontinued").Set "2015-09-23" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("discontinued")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Computers database").Page("Computers database").WebList("company").Select "Apple Inc." @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebList("company")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Computers database").Page("Computers database").WebButton("Create this computer").Click

Dim ctrlWebEl, objWebEl 

Set ctrlWebEl = Browser("Computers database").Page("Computers database").WebElement("Computer name  Required")
Set objWebEl = ctrlWebEl.Object

sBackgrColor = objWebEl.currentStyle.backgroundColor
If sBackgrColor <> "transparent" Then 
	Reporter.ReportEvent micpass,"ComDb_Create_03", "Computer name cannot be empty"
	
else
	Reporter.ReportEvent micfail,"ComDb_Create_03", "Computer feild was not highlighted when the value in the feild was kept empty"
End If


End If
 Set ctrlWebEl = Nothing
 Set objWebEl = nothing

Browser("Computers database").Page("Computers database").Link("Play sample application").Click
LinkCheck = Browser("Computers database").Page("Computers database").Link("Play sample application").Exist(5)

If err.number<> 0  Then
	
Reporter.ReportEvent micFail,Step1, "Page did not load proeperly"

Else

Browser("Computers database").Page("Computers database").Link("Add a new computer").Click
Browser("Computers database").Page("Computers database").WebEdit("name").Set "acer" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("name")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Computers database").Page("Computers database").WebEdit("introduced").Set "invalid" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("introduced")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Computers database").Page("Computers database").WebEdit("discontinued").Set "2015-09-23" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("discontinued")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Computers database").Page("Computers database").WebList("company").Select "IBM" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebList("company")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Computers database").Page("Computers database").WebButton("Create this computer").Click


Set ctrlWebEl = Browser("Computers database").Page("Computers database_2").WebElement("Introduced date  Date")
Set objWebEl = ctrlWebEl.Object


sBackgrColor = objWebEl.currentStyle.backgroundColor
If sBackgrColor <> "transparent" Then 
	Reporter.ReportEvent micpass,"ComDb_Create_04", "introduced date format provided is invalid"
	
else
	Reporter.ReportEvent micfail,"ComDb_Create_04", "introduced date feild was not highlighted when the value in the feild was kept empty"
End If


End If

Set ctrlWebEl = Nothing
 Set objWebEl = nothing
Browser("Computers database").Page("Computers database").Link("Play sample application").Click
LinkCheck = Browser("Computers database").Page("Computers database").Link("Play sample application").Exist(5)

If err.number<> 0  Then
	
Reporter.ReportEvent micFail,Step1, "Page did not load proeperly"

Else

Browser("Computers database").Page("Computers database").Link("Add a new computer").Click
Browser("Computers database").Page("Computers database").WebEdit("name").Set "acer" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("name")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Computers database").Page("Computers database").WebEdit("introduced").Set "2015-09-23" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("introduced")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Computers database").Page("Computers database").WebEdit("discontinued").Set "20-2009-23" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebEdit("discontinued")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Computers database").Page("Computers database").WebList("company").Select "Samsung Electronics" @@ hightlight id_;_Browser("Browser").Page("Computers database 2").WebList("company")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Computers database").Page("Computers database").WebButton("Create this computer").Click


Set ctrlWebEl = Browser("Computers database").Page("Computers database_2").WebElement("Discontinued date  Date")
Set objWebEl = ctrlWebEl.Object


sBackgrColor = objWebEl.currentStyle.backgroundColor
If sBackgrColor <> "transparent" Then 
	Reporter.ReportEvent micpass,"ComDb_Create_05", "discontinued date format provided is invalid"
	
else
	Reporter.ReportEvent micfail,"ComDb_Create_05", "discontinued date feild was not highlighted when the value in the feild was kept empty"
End If


End If
Set ctrlWebEl = Nothing
 Set objWebEl = nothing
 
 Browser("Computers database").Close
 wait(2)
